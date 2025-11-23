import { useState } from 'react';
import { ChevronDown, ChevronRight, ChevronLeft, FileCode, Folder, FolderOpen } from 'lucide-react';
import Header from "../../components/App/Header/Header";
import { projects } from '../../assets/Projects';
import { useLocation, useNavigate } from 'react-router-dom';

export default function ProjectsPost() {
  // Track which code lines are expanded (per-file)
  const [expandedLines, setExpandedLines] = useState({});
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [expandedFolders, setExpandedFolders] = useState({});
  const [selectedFile, setSelectedFile] = useState('forLoop');
  const location = useLocation();

  // Determine selected project from query param `id` (falls back to first project)
  const params = new URLSearchParams(location.search);
  const projectId = params.get('id');
  const project = projects.find(p => p.id === projectId || p.slug === projectId) || projects[0];
  const fileSystem = project.fileSystem;
  const navigate = useNavigate();

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
  };

  // Find the selected file within the currently selected project's filesystem
  let currentFile = null;
  for (const folder in fileSystem) {
    if (fileSystem[folder].files[selectedFile]) {
      currentFile = fileSystem[folder].files[selectedFile];
      break;
    }
  }

  return (

    <>
    <div className="flex min-h-screen bg-gradient-to-br from-slate-900 to-slate-950 pt-[4.75rem] lg:pt-[5.25rem]">
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
                  <FolderOpen size={10} md:size={16} hidden md:block className="text-purple-400" />
                ) : (
                  <Folder size={10} md:size={16} hidden md:block className="text-slate-400" />
                )}
                <ChevronRight
                  size={10} md:size={16}
                  className={`transition-transform ${
                    expandedFolders[folderName] ? 'rotate-90' : ''
                  }`}
                />
                <span className="text-[10px] md:text-sm truncate" title={folderName}>{folderName}</span>
              </button>

              {expandedFolders[folderName] && (
                <div className="ml-2 space-y-1">
                  {Object.entries(folder.files).map(([fileKey, file]) => (
                    <button
                      key={fileKey}
                      onClick={() => handleFileSelect(fileKey)}
                      className={`w-full flex items-center gap-2 px-2 py-1 rounded text-[9px] md:text-sm transition-colors min-w-0 overflow-hidden ${
                        selectedFile === fileKey
                          ? 'bg-purple-600 bg-opacity-40 border border-purple-500 text-purple-100'
                          : 'text-slate-400 hover:text-slate-200 hover:bg-purple-950'
                      }`}
                    >
                      <FileCode size={8} hidden md:block md:size={12} />
                      <span className="text-[9px] md:text-xs truncate" title={file.title}>{file.title}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Toggle Sidebar Button */}
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className={`absolute top-1/2 -translate-y-1/2 bg-slate-950 border border-slate-700 p-1 md:p-2 hover:bg-n-8 transition-all duration-300 text-slate-400 hover:text-white rounded-lg z-2 ${sidebarOpen ? 'left-[calc(7.7rem-12px)] md:left-[calc(16rem-12px)]' : '-left-3'}`}
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
              <div className="text-xs md:text-sm text-slate-400 truncate" title={selectedFile}>
                {currentFile ? currentFile.title : selectedFile}
              </div>
            </div>
            <h1 className="text-2xl md:text-4xl font-bold text-white mb-2">Code Explorer</h1>
            <p className="text-[0.65rem] md:text-sm text-slate-400 ">Click on any line of code to see a breakdown of its components</p>
          </div>

          {currentFile && (
            <div className="overflow-hidden transition-colors">
                {/* Code Line */}
                    {currentFile.lines.map((lineItem, lineIdx) => (
                    <div key={lineIdx}>
                        <button
                        onClick={() => setExpandedLines(prev => ({
                            ...prev,
                            [lineIdx]: !prev[lineIdx]
                        }))}
                        className="w-full text-left group"
                        >
                    <div className={`flex items-center gap-3 px-4 py-3 font-mono text-xs md:text-sm transition-all min-w-0 overflow-hidden ${
                            expandedLines[lineIdx]
                            ? 'bg-purple-950 bg-opacity-30 text-slate-200 hover:bg-opacity-70 hover:border-slate-500 text-blue-100'
                            : 'bg-purple-950 bg-opacity-50 text-slate-200 hover:bg-opacity-70 hover:border-slate-500'
                        }`}
                    >
                    <code className="truncate block text-[0.65rem] md:text-sm">{lineItem.code}</code>
                    </div>
                    </button>

                    {/* Breakdown */}
                    {expandedLines[lineIdx] && (
                    <div className="mt-4 mb-4 space-y-3 animate-in fade-in duration-200">
                        {lineItem.breakdown.map((item, idx) => (
                        <div
                        key={idx}
                        className="ml-4 pl-3 border-l-2 border-purple-300 py-2"
                        >
                        <div className="font-mono text-[10px] md:text-sm font-semibold text-purple-300 mb-1">
                        {item.part}
                        </div>
                            <div className="text-[10px] md:text-sm leading-relaxed">
                            {item.explanation}
                            </div>
                        </div>
                        ))}
                        </div>
                        )}
                    </div>
                    ))}
            </div>
            
          )}

          {/* Instructions */}
          <div className="mt-12 bg-purple-950 bg-opacity-50 border border-slate-600 rounded-lg p-6">
            <h2 className="text-white font-semibold mb-3 text-[0.75rem] md:text-sm">How to use:</h2>
            <ul className="text-slate-300 space-y-2 text-[0.65rem] md:text-sm">
              <li className="leading-tight">Use the sidebar on the left to browse file directories</li>
              <li className="leading-tight">Click on any file to open it and view its code</li>
              <li className="leading-tight">Click on the code line to expand and see its breakdown</li>
              <li className="leading-tight">Click the chevron button to toggle the sidebar</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}