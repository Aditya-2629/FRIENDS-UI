const PreviewPanel = ({ code, refreshKey }) => {
  return (
    <iframe
      key={refreshKey}
      srcDoc={code}
      className="w-full h-full bg-white"
    />
  );
};

export default PreviewPanel;
