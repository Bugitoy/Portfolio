export const bigramFile = {
    'bigram.py': {
      type: 'file',
      title: 'bigram.py',
      lines: [
        {
          code: 'import torch',
          breakdown: [
            { part: 'import torch', explanation: 'Imports the core PyTorch library for tensor computations' },
          ],
        },
        {
          code: 'import torch.nn as nn',
          breakdown: [
            { part: 'torch.nn', explanation: 'Neural Network module containing layers like Linear, Embedding, etc.' },
            { part: 'as nn', explanation: 'Standard alias for readability' },
          ],
        },
        {
          code: 'from torch.nn import functional as F',
          breakdown: [
            { part: 'functional as F', explanation: 'Contains stateless functions like activation functions (relu) and loss functions (cross_entropy)' },
          ],
        },
        {
          code: '',
          breakdown: [],
        },
        {
          code: '# hyperparameters',
          breakdown: [],
        },
        {
          code: 'batch_size = 32 # how many independent sequences will we process in parallel?',
          breakdown: [
            { part: 'batch_size', explanation: 'The number of samples processed before the model is updated' },
          ],
        },
        {
          code: 'block_size = 8 # what is the maximum context length for predictions?',
          breakdown: [
            { part: 'block_size', explanation: 'The length of the chunk of text used to predict the next character' },
          ],
        },
        {
          code: 'max_iters = 3000',
          breakdown: [
            { part: 'max_iters', explanation: 'Total number of training loops' },
          ],
        },
        {
          code: 'eval_interval = 300',
          breakdown: [
            { part: 'eval_interval', explanation: 'How often to pause training to print loss statistics' },
          ],
        },
        {
          code: 'learning_rate = 1e-2',
          breakdown: [
            { part: '1e-2', explanation: 'The step size for the optimizer (0.01)' },
          ],
        },
        {
          code: 'device = \'cuda\' if torch.cuda.is_available() else \'cpu\'',
          breakdown: [
            { part: 'device', explanation: 'Selects GPU (cuda) if available for faster training, otherwise defaults to CPU' },
          ],
        },
        {
          code: 'eval_iters = 200',
          breakdown: [
            { part: 'eval_iters', explanation: 'Number of batches to average over when estimating loss to reduce noise' },
          ],
        },
        {
          code: '# ------------',
          breakdown: [],
        },
        {
          code: '',
          breakdown: [],
        },
        {
          code: 'torch.manual_seed(1337)',
          breakdown: [
            { part: 'manual_seed', explanation: 'Sets a fixed seed for random number generation to ensure reproducibility' },
          ],
        },
        {
          code: '',
          breakdown: [],
        },
        {
          code: '# wget https://raw.githubusercontent.com/karpathy/char-rnn/master/data/tinyshakespeare/input.txt',
          breakdown: [],
        },
        {
          code: 'with open(\'input.txt\', \'r\', encoding=\'utf-8\') as f:',
          breakdown: [
            { part: 'open', explanation: 'Opens the text file containing the training data' },
          ],
        },
        {
          code: '    text = f.read()',
          breakdown: [],
        },
        {
          code: '',
          breakdown: [],
        },
        {
          code: '# here are all the unique characters that occur in this text',
          breakdown: [],
        },
        {
          code: 'chars = sorted(list(set(text)))',
          breakdown: [
            { part: 'set(text)', explanation: 'Extracts unique characters' },
            { part: 'sorted', explanation: 'Orders them alphabetically to create a deterministic vocabulary' },
          ],
        },
        {
          code: 'vocab_size = len(chars)',
          breakdown: [
            { part: 'vocab_size', explanation: 'The total number of unique tokens (characters) the model knows' },
          ],
        },
        {
          code: '# create a mapping from characters to integers',
          breakdown: [],
        },
        {
          code: 'stoi = { ch:i for i,ch in enumerate(chars) }',
          breakdown: [
            { part: 'stoi', explanation: 'String-to-Integer mapping (Look-up)' },
          ],
        },
        {
          code: 'itos = { i:ch for i,ch in enumerate(chars) }',
          breakdown: [
            { part: 'itos', explanation: 'Integer-to-String mapping (Reverse look-up)' },
          ],
        },
        {
          code: 'encode = lambda s: [stoi[c] for c in s] # encoder: take a string, output a list of integers',
          breakdown: [
            { part: 'encode', explanation: 'Converts raw text into a format the tensor can understand' },
          ],
        },
        {
          code: 'decode = lambda l: \'\'.join([itos[i] for i in l]) # decoder: take a list of integers, output a string',
          breakdown: [
            { part: 'decode', explanation: 'Converts model output integers back into human-readable text' },
          ],
        },
        {
          code: '',
          breakdown: [],
        },
        {
          code: '# Train and test splits',
          breakdown: [],
        },
        {
          code: 'data = torch.tensor(encode(text), dtype=torch.long)',
          breakdown: [
            { part: 'torch.tensor', explanation: 'Wraps the list of integers into a PyTorch Tensor object' },
            { part: 'dtype=torch.long', explanation: 'Specifies 64-bit integer type, required for indices' },
          ],
        },
        {
          code: 'n = int(0.9*len(data)) # first 90% will be train, rest val',
          breakdown: [],
        },
        {
          code: 'train_data = data[:n]',
          breakdown: [
            { part: '[:n]', explanation: 'Slices the tensor to get the first 90%' },
          ],
        },
        {
          code: 'val_data = data[n:]',
          breakdown: [],
        },
        {
          code: '',
          breakdown: [],
        },
        {
          code: '# data loading',
          breakdown: [],
        },
        {
          code: 'def get_batch(split):',
          breakdown: [],
        },
        {
          code: '    # generate a small batch of data of inputs x and targets y',
          breakdown: [],
        },
        {
          code: '    data = train_data if split == \'train\' else val_data',
          breakdown: [],
        },
        {
          code: '    ix = torch.randint(len(data) - block_size, (batch_size,))',
          breakdown: [
            { part: 'torch.randint', explanation: 'Generates random starting indices for the batch' },
            { part: 'len(data) - block_size', explanation: 'Ensures we do not read past the end of the dataset' },
          ],
        },
        {
          code: '    x = torch.stack([data[i:i+block_size] for i in ix])',
          breakdown: [
            { part: 'x', explanation: 'The input context chunks' },
            { part: 'torch.stack', explanation: 'Stacks multiple 1D tensors into a single 2D tensor (Batch, Block)' },
          ],
        },
        {
          code: '    y = torch.stack([data[i+1:i+block_size+1] for i in ix])',
          breakdown: [
            { part: 'y', explanation: 'The target chunks (offset by 1 character from input)' },
          ],
        },
        {
          code: '    x, y = x.to(device), y.to(device)',
          breakdown: [
            { part: '.to(device)', explanation: 'Moves the data to the GPU memory if available' },
          ],
        },
        {
          code: '    return x, y',
          breakdown: [],
        },
        {
          code: '',
          breakdown: [],
        },
        {
          code: '@torch.no_grad()',
          breakdown: [
            { part: '@torch.no_grad()', explanation: 'Decorator that disables gradient calculation to save memory during evaluation' },
          ],
        },
        {
          code: 'def estimate_loss():',
          breakdown: [],
        },
        {
          code: '    out = {}',
          breakdown: [],
        },
        {
          code: '    model.eval()',
          breakdown: [
            { part: 'model.eval()', explanation: 'Sets the model to evaluation mode (disables dropout, batchnorm updates)' },
          ],
        },
        {
          code: '    for split in [\'train\', \'val\']:',
          breakdown: [],
        },
        {
          code: '        losses = torch.zeros(eval_iters)',
          breakdown: [],
        },
        {
          code: '        for k in range(eval_iters):',
          breakdown: [],
        },
        {
          code: '            X, Y = get_batch(split)',
          breakdown: [],
        },
        {
          code: '            logits, loss = model(X, Y)',
          breakdown: [
            { part: 'model(X, Y)', explanation: 'Forward pass: computes predictions and loss' },
          ],
        },
        {
          code: '            losses[k] = loss.item()',
          breakdown: [
            { part: '.item()', explanation: 'Extracts the float value from the single-value tensor' },
          ],
        },
        {
          code: '        out[split] = losses.mean()',
          breakdown: [
            { part: '.mean()', explanation: 'Averages the loss over the collected batches' },
          ],
        },
        {
          code: '    model.train()',
          breakdown: [
            { part: 'model.train()', explanation: 'Sets the model back to training mode' },
          ],
        },
        {
          code: '    return out',
          breakdown: [],
        },
        {
          code: '',
          breakdown: [],
        },
        {
          code: '# super simple bigram model',
          breakdown: [],
        },
        {
          code: 'class BigramLanguageModel(nn.Module):',
          breakdown: [
            { part: 'nn.Module', explanation: 'The base class for all neural network modules in PyTorch' },
          ],
        },
        {
          code: '',
          breakdown: [],
        },
        {
          code: '    def __init__(self, vocab_size):',
          breakdown: [],
        },
        {
          code: '        super().__init__()',
          breakdown: [
            { part: 'super().__init__()', explanation: 'Initializes the parent nn.Module class' },
          ],
        },
        {
          code: '        # each token directly reads off the logits for the next token from a lookup table',
          breakdown: [],
        },
        {
          code: '        self.token_embedding_table = nn.Embedding(vocab_size, vocab_size)',
          breakdown: [
            { part: 'nn.Embedding', explanation: 'A lookup table that stores embeddings of a fixed dictionary and size' },
            { part: '(vocab_size, vocab_size)', explanation: 'In a Bigram model, this maps current char (row) to scores for next char (col)' },
          ],
        },
        {
          code: '',
          breakdown: [],
        },
        {
          code: '    def forward(self, idx, targets=None):',
          breakdown: [
            { part: 'forward', explanation: 'Defines the computation performed at every call' },
            { part: 'idx', explanation: 'Input tensor of shape (Batch, Time/Block)' },
          ],
        },
        {
          code: '',
          breakdown: [],
        },
        {
          code: '        # idx and targets are both (B,T) tensor of integers',
          breakdown: [],
        },
        {
          code: '        logits = self.token_embedding_table(idx) # (B,T,C)',
          breakdown: [
            { part: 'logits', explanation: 'Raw, unnormalized scores output by the model' },
            { part: '(B,T,C)', explanation: 'Dimensions: Batch, Time (Sequence Length), Channels (Vocab Size)' },
          ],
        },
        {
          code: '',
          breakdown: [],
        },
        {
          code: '        if targets is None:',
          breakdown: [],
        },
        {
          code: '            loss = None',
          breakdown: [],
        },
        {
          code: '        else:',
          breakdown: [],
        },
        {
          code: '            B, T, C = logits.shape',
          breakdown: [
            { part: 'B, T, C', explanation: 'Unpacking dimensions' },
          ],
        },
        {
          code: '            logits = logits.view(B*T, C)',
          breakdown: [
            { part: '.view(B*T, C)', explanation: 'Reshapes tensor to 2D [(all tokens), (vocab scores)] because cross_entropy expects 2D input' },
          ],
        },
        {
          code: '            targets = targets.view(B*T)',
          breakdown: [
            { part: '.view(B*T)', explanation: 'Flattens targets to match the flattened logits' },
          ],
        },
        {
          code: '            loss = F.cross_entropy(logits, targets)',
          breakdown: [
            { part: 'F.cross_entropy', explanation: 'Calculates loss combining LogSoftmax and NLLLoss' },
          ],
        },
        {
          code: '',
          breakdown: [],
        },
        {
          code: '        return logits, loss',
          breakdown: [],
        },
        {
          code: '',
          breakdown: [],
        },
        {
          code: '    def generate(self, idx, max_new_tokens):',
          breakdown: [
            { part: 'generate', explanation: 'Function to generate new text autoregressively' },
          ],
        },
        {
          code: '        # idx is (B, T) array of indices in the current context',
          breakdown: [],
        },
        {
          code: '        for _ in range(max_new_tokens):',
          breakdown: [],
        },
        {
          code: '            # get the predictions',
          breakdown: [],
        },
        {
          code: '            logits, loss = self(idx)',
          breakdown: [
            { part: 'self(idx)', explanation: 'Calls the forward method to get logits' },
          ],
        },
        {
          code: '            # focus only on the last time step',
          breakdown: [],
        },
        {
          code: '            logits = logits[:, -1, :] # becomes (B, C)',
          breakdown: [
            { part: '[:, -1, :]', explanation: 'Takes only the prediction for the very last character in the sequence' },
          ],
        },
        {
          code: '            # apply softmax to get probabilities',
          breakdown: [],
        },
        {
          code: '            probs = F.softmax(logits, dim=-1) # (B, C)',
          breakdown: [
            { part: 'F.softmax', explanation: 'Converts raw logits into probabilities (summing to 1)' },
          ],
        },
        {
          code: '            # sample from the distribution',
          breakdown: [],
        },
        {
          code: '            idx_next = torch.multinomial(probs, num_samples=1) # (B, 1)',
          breakdown: [
            { part: 'torch.multinomial', explanation: 'Samples 1 index based on the probability distribution provided' },
          ],
        },
        {
          code: '            # append sampled index to the running sequence',
          breakdown: [],
        },
        {
          code: '            idx = torch.cat((idx, idx_next), dim=1) # (B, T+1)',
          breakdown: [
            { part: 'torch.cat', explanation: 'Concatenates the new character index to the existing sequence' },
          ],
        },
        {
          code: '        return idx',
          breakdown: [],
        },
        {
          code: '',
          breakdown: [],
        },
        {
          code: 'model = BigramLanguageModel(vocab_size)',
          breakdown: [
            { part: 'model', explanation: 'Instantiates the model class' },
          ],
        },
        {
          code: 'm = model.to(device)',
          breakdown: [
            { part: '.to(device)', explanation: 'Moves the model parameters to the GPU if available' },
          ],
        },
        {
          code: '',
          breakdown: [],
        },
        {
          code: '# create a PyTorch optimizer',
          breakdown: [],
        },
        {
          code: 'optimizer = torch.optim.AdamW(model.parameters(), lr=learning_rate)',
          breakdown: [
            { part: 'AdamW', explanation: 'A stochastic gradient descent method with weight decay' },
            { part: 'model.parameters()', explanation: 'Passes all trainable weights of the model to the optimizer' },
          ],
        },
        {
          code: '',
          breakdown: [],
        },
        {
          code: 'for iter in range(max_iters):',
          breakdown: [
            { part: 'max_iters', explanation: 'Main training loop' },
          ],
        },
        {
          code: '',
          breakdown: [],
        },
        {
          code: '    # every once in a while evaluate the loss on train and val sets',
          breakdown: [],
        },
        {
          code: '    if iter % eval_interval == 0:',
          breakdown: [
            { part: '%', explanation: 'Modulo operator checking if the current iteration divides evenly by the interval' },
          ],
        },
        {
          code: '        losses = estimate_loss()',
          breakdown: [
            { part: 'estimate_loss', explanation: 'Calls the helper function to check model performance without updating gradients' },
          ],
        },
        {
          code: '        print(f"step {iter}: train loss {losses[\'train\']:.4f}, val loss {losses[\'val\']:.4f}")',
          breakdown: [],
        },
        {
          code: '',
          breakdown: [],
        },
        {
          code: '    # sample a batch of data',
          breakdown: [],
        },
        {
          code: '    xb, yb = get_batch(\'train\')',
          breakdown: [
            { part: 'get_batch', explanation: 'Fetches a random batch of inputs and targets' },
          ],
        },
        {
          code: '',
          breakdown: [],
        },
        {
          code: '    # evaluate the loss',
          breakdown: [],
        },
        {
          code: '    logits, loss = model(xb, yb)',
          breakdown: [
            { part: 'model(...)', explanation: 'Performs the forward pass' },
          ],
        },
        {
          code: '    optimizer.zero_grad(set_to_none=True)',
          breakdown: [
            { part: 'zero_grad', explanation: 'Clears old gradients from the previous step before calculating new ones' },
          ],
        },
        {
          code: '    loss.backward()',
          breakdown: [
            { part: 'backward', explanation: 'Backpropagation: computes the gradient of the loss with respect to all parameters' },
          ],
        },
        {
          code: '    optimizer.step()',
          breakdown: [
            { part: 'step', explanation: 'Updates the model parameters based on the computed gradients' },
          ],
        },
        {
          code: '',
          breakdown: [],
        },
        {
          code: '# generate from the model',
          breakdown: [],
        },
        {
          code: 'context = torch.zeros((1, 1), dtype=torch.long, device=device)',
          breakdown: [
            { part: 'torch.zeros', explanation: 'Creates a starting token (index 0, usually newline) to kickstart generation' },
          ],
        },
        {
          code: 'print(decode(m.generate(context, max_new_tokens=500)[0].tolist()))',
          breakdown: [
            { part: 'm.generate', explanation: 'Generates 500 new characters' },
            { part: '.tolist()', explanation: 'Converts tensor to a standard Python list' },
            { part: 'decode', explanation: 'Converts the list of integers back to a string' },
          ],
        },
      ],
    },
  };