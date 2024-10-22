import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism"; // Import a theme

const CourseContent = ({ markdownUrl }) => {
  const [content, setContent] = useState("");

  useEffect(() => {
    // Fetch the markdown content from the provided URL
    fetch(markdownUrl)
      .then((response) => response.text())
      .then((text) => setContent(text))
      .catch((error) => console.error("Error fetching markdown:", error));
  }, [markdownUrl]);

  return (
    <div className="max-w-4xl mx-auto p-6   shadow-md rounded-lg">
      <ReactMarkdown
        children={content}
        remarkPlugins={[remarkGfm]}
        className="prose prose-lg flex space-y-[50px] space-x-[50px] flex-col"
        components={{
          code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || "");
            return !inline && match ? (
              <SyntaxHighlighter
                style={vscDarkPlus}
                language={match[1]}
                PreTag="div"
              >
                {String(children).replace(/\n$/, "")}
              </SyntaxHighlighter>
            ) : (
              <code className={className} {...props}>
                {children}
              </code>
            );
          }
        }}
      />
    </div>
  );
};

export default CourseContent;
