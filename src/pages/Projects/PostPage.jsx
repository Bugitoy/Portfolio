import { useState, useEffect } from 'react';
import { ChevronDown, ChevronRight, ChevronLeft, FileCode, Folder, FolderOpen } from 'lucide-react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import Header from "../../components/App/Header/Header";
import { projects } from '../../assets/Projects';
import { useLocation, useNavigate } from 'react-router-dom';

export default function ProjectsPost() {
  const location = useLocation();
  const navigate = useNavigate();

  // Determine selected project from query param `id` (falls back to first project)
  const params = new URLSearchParams(location.search);
  const projectId = params.get('id');
  const fileParam = params.get('file');
  const project = projects.find(p => p.id === projectId || p.slug === projectId) || projects[0];
  const fileSystem = project.fileSystem;

  // Track which code lines are expanded (per-file)
  const [expandedLines, setExpandedLines] = useState({});
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [expandedFolders, setExpandedFolders] = useState({});

  // Initialize selectedFile from URL `file` param or fall back to the first file in the filesystem
  const [selectedFile, setSelectedFile] = useState(() => {
    try {
      if (fileParam) {
        // ensure the file exists in the filesystem
        for (const folder in fileSystem) {
          if (fileSystem[folder].files[fileParam]) return fileParam;
        }
      }
      // pick the first file key available
      for (const folder in fileSystem) {
        const keys = Object.keys(fileSystem[folder].files || {});
        if (keys.length) return keys[0];
      }
    } catch (e) {
      // fallback
    }
    return null;
  });

  // If the project (or its filesystem) changes, ensure selectedFile points to a valid file
  useEffect(() => {
    if (!selectedFile) {
      // set to first available file
      for (const folder in fileSystem) {
        const keys = Object.keys(fileSystem[folder].files || {});
        if (keys.length) {
          setSelectedFile(keys[0]);
          return;
        }
      }
    } else {
      // if selectedFile no longer exists in new filesystem, reset to first available
      let exists = false;
      for (const folder in fileSystem) {
        if (fileSystem[folder].files[selectedFile]) {
          exists = true;
          break;
        }
      }
      if (!exists) {
        for (const folder in fileSystem) {
          const keys = Object.keys(fileSystem[folder].files || {});
          if (keys.length) {
            setSelectedFile(keys[0]);
            return;
          }
        }
        setSelectedFile(null);
      }
    }
  }, [projectId]);

  const toggleFolder = (folderName) => {
    setExpandedFolders(prev => ({
      ...prev,
      [folderName]: !prev[folderName],
    }));
  };

  const handleFileSelect = (fileKey) => {
    setSelectedFile(fileKey);
    // clear any expanded code lines when switching files
    setExpandedLines({});
    // update URL so the selected file is bookmarkable/shareable
    try {
      const params = new URLSearchParams(location.search);
      params.set('file', fileKey);
      if (projectId) params.set('id', projectId);
      navigate(`${location.pathname}?${params.toString()}`, { replace: true });
    } catch (e) {
      // ignore URL update errors
    }
  };

  // Find the selected file within the currently selected project's filesystem
  let currentFile = null;
  let currentFolderName = null;
  for (const folder in fileSystem) {
    if (fileSystem[folder].files[selectedFile]) {
      currentFile = fileSystem[folder].files[selectedFile];
      currentFolderName = folder;
      break;
    }
  }

  const languageMap = {
    JavaScript: 'javascript',
    Python: 'python',
    React: 'javascript',
  };
  const codeLanguage = languageMap[currentFolderName] || 'text';

  return (

    <>
    <div className="flex min-h-screen bg-gradient-to-br from-slate-950 to-gray-950 pt-[4.75rem] lg:pt-[5.25rem]">
        <Header />  
      {/* Floating Sidebar */}
      <div
        className={`${
          sidebarOpen ? 'w-[8rem] md:w-64' : 'w-0'
        } transition-all duration-300 bg-n-8 border-r border-slate-700 overflow-hidden flex flex-col relative`}
      >
      
          <h2 className=" p-4 pb-2 text-white font-semibold text-[11px] md:text-lg">Files</h2>


        <div className="flex-1 overflow-y-auto p-4">
          {Object.entries(fileSystem).map(([folderName, folder]) => (
            <div key={folderName} className="mb-2">
                <button
                onClick={() => toggleFolder(folderName)}
                className="w-full flex items-center gap-2 px-2 py-1 mb-1 rounded hover:bg-purple-950 transition-colors text-slate-200 hover:text-white min-w-0 overflow-hidden"
              >
                {expandedFolders[folderName] ? (
                  <FolderOpen size={16} className="hidden md:block text-purple-400" />
                ) : (
                  <Folder size={16} className="hidden md:block text-slate-400" />
                )}
                <ChevronRight
                  size={16}
                  className={`transition-transform ${
                    expandedFolders[folderName] ? 'rotate-90' : ''
                  }`}
                />
                <span className="text-[8px] md:text-sm truncate" title={folderName}>{folderName}</span>
              </button>

              {expandedFolders[folderName] && (
                <div className="ml-2 space-y-1">
                  {Object.entries(folder.files).map(([fileKey, file]) => (
                    <button
                      key={fileKey}
                      onClick={() => handleFileSelect(fileKey)}
                      className={`w-full flex items-center gap-2 px-2 py-1 rounded text-[7px] md:text-sm transition-colors min-w-0 overflow-hidden ${
                        selectedFile === fileKey
                          ? 'bg-purple-600 bg-opacity-40 border border-purple-500 text-purple-100'
                          : 'text-slate-400 hover:text-slate-200 hover:bg-purple-950'
                      }`}
                    >
                      <FileCode size={12} className="hidden md:block" />
                      <span className="text-[7px] md:text-xs truncate" title={file.title}>{file.title}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Toggle Sidebar Button (fixed so it stays visible while scrolling) */}
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className={`fixed top-1/2 -translate-y-1/2 border border-slate-700 p-1 md:p-2 bg-n-8 transition-all duration-300 text-slate-400 hover:text-white rounded-lg z-50 ${sidebarOpen ? 'left-[calc(7.7rem-12px)] md:left-[calc(16rem-12px)]' : '-left-3'}`}
      >
        <ChevronRight
          size={20}
          className={`transition-transform ${sidebarOpen ? 'rotate-180' : ''}`}
        />
      </button>

      {/* Main Content */}
      <div className="flex-1 p-6 overflow-auto">
        <div className="max-w-4xl">
          <div className="mb-8">
            <div className="mb-2">
              <div className="text-[0.50rem] md:text-sm text-slate-400 truncate" title={selectedFile}>
                {currentFile ? currentFile.title : selectedFile}
              </div>
            </div>
            <h1 className="text-2xl md:text-4xl font-bold text-white mb-2">Code Explorer</h1>
            <p className="text-[0.60rem] md:text-sm text-slate-400 leading-tight">Click on any line of code to see a breakdown of its components</p>
          </div>

          {currentFile && (
            <div className="overflow-hidden transition-colors">
                {/* Code Line */}
                    {currentFile.lines.map((lineItem, lineIdx) => {
                    const leadingSpacesMatch = lineItem.code ? lineItem.code.match(/^(\s*)/) : null;
                    const leadingSpaces = leadingSpacesMatch ? leadingSpacesMatch[1].replace(/\t/g, '    ').length : 0;
                    return (
                    <div key={lineIdx}>
                        <button
                        onClick={() => setExpandedLines(prev => ({
                            ...prev,
                            [lineIdx]: !prev[lineIdx]
                        }))}
                        className="w-full text-left group"
                        >
        <div className={`flex items-center gap-3 px-4 py-0 font-mono text-[0.40rem] md:text-sm transition-all min-w-0 overflow-hidden ${
                            expandedLines[lineIdx]
                            ? 'bg-purple-950 bg-opacity-30 text-slate-200 hover:bg-opacity-70 hover:border-slate-500 text-blue-100'
                            : 'bg-opacity-50 text-slate-200 hover:bg-opacity-70 hover:border-slate-500'
                        }`}
                    >
                      <div className="w-full">
                        <div className="code-wrapper-sm text-[0.55rem] md:text-sm leading-none">
                          <SyntaxHighlighter
                            language={codeLanguage}
                            style={vscDarkPlus}
                            customStyle={{ background: 'transparent', padding: 0, margin: 0, fontSize: '0.55rem', lineHeight: '1rem' }}
                            codeTagProps={{ style: { fontSize: '0.55rem', lineHeight: '1rem' } }}
                            wrapLongLines={true}
                          >
                            {lineItem.code}
                          </SyntaxHighlighter>
                        </div>
                      </div>
                    </div>
                    </button>

                {/* Breakdown */}
                {expandedLines[lineIdx] && (
                <div className="p-1 md:mt-1 mb-1 space-y-1 md:space-y-1 animate-in fade-in duration-200">
                {lineItem.breakdown && lineItem.breakdown.length > 0 ? (
                    lineItem.breakdown.map((item, idx) => (
                    <div key={idx} className="ml-4 pl-3 border-l-[1px] md:border-l-2 border-purple-300 md:py-1 md:py-2">
                        <div style={{ marginLeft: `${leadingSpaces}ch` }}>
                        <div className="font-mono text-[8px] md:text-xs font-semibold text-purple-300 md:mb-1">
                            {item.part}
                        </div>
                        <div className="text-[0.50rem] md:text-xs leading-relaxed">
                            {item.explanation}
                        </div>
                        </div>
                    </div>
                    ))
                ) : (
                    <div className="ml-4 pl-3 border-l-[1px] md:border-l-2 border-purple-300 py-1 md:py-2 text-[0.65rem] text-slate-400">No breakdown available</div>
                )}
                </div>
            )}
            </div>
      );
      })}
      </div>
            
          )}
        </div>
      </div>
    </div>
    </>
  );
}