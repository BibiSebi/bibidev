type CodeBlockFunc = (props: Record<string, unknown>) => JSX.Element;

const CodeBlock: CodeBlockFunc = (props) => {
  return (
    <div className='mb-2 mt-2 overflow-hidden rounded-2xl border border-gray-100 shadow-lg shadow-gray-100 '>
      <div className='flex h-10 items-center space-x-1.5 border-b border-r border-gray-100 px-4'>
        <span className='h-3 w-3 rounded-full bg-red-400 dark:bg-slate-600' />
        <span className='h-3 w-3 rounded-full bg-amber-400 dark:bg-slate-600' />
        <span className='h-3 w-3 rounded-full bg-green-400 dark:bg-slate-600' />
      </div>
      <div className='p-4'>
        <code {...props} className='bg-transparent' />
      </div>
    </div>
  );
};

export default CodeBlock;
