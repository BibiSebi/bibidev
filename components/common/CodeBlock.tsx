type CodeBlockFunc = (props: Record<string, unknown>) => JSX.Element;

const CodeBlock: CodeBlockFunc = (props) => {
  return (
    <pre className='mb-2 mt-2 overflow-hidden rounded-2xl border border-gray-100 shadow-lg shadow-gray-400 '>
      <div className='flex h-10 items-center space-x-1.5 border-b border-r border-gray-100 px-4'>
        <span className='h-3 w-3 rounded-full bg-red-400' />
        <span className='h-3 w-3 rounded-full bg-amber-400' />
        <span className='h-3 w-3 rounded-full bg-green-400' />
      </div>
      <div className='flex bg-transparent p-4' {...props} />
    </pre>
  );
};

export default CodeBlock;
