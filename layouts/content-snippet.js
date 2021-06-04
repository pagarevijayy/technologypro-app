const ContentSnippet = (props) => {
  return (
    <div className="bg-white p-4 rounded-lg bg-opacity-40 shadow-sm">
      {props.children}
    </div>
  );
};

export default ContentSnippet;
