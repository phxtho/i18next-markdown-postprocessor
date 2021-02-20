import MarkdownIt from "markdown-it";
import parse from "html-react-parser";

let md = MarkdownIt({
  breaks: true,
  html: true
});

export default {
  name: "markdownPostprocessor",
  type: "postProcessor",

  process(value, key, options) {
    return parse(md.renderInline(value));
  }
};
