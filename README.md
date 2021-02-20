# i18next-markdown-postprocessor

Write markdown in your i18next translation strings

## Usage

```javascript
import i18next from "i18next";
import MarkdownPostprocessor from "i18next-markdown-postprocessor";

i18next.use(MarkdownPostprocessor).init();
```
per key set the `postProcess` option to  'markdownPostprocessor'

```javascript
import i18next from 'i18next';
import React from 'react';

function MyComponent(props) {
  return (
    <div>
      {i18next.t(`myKey`, {
        postProcess: `markdownPostprocessor`
      })}
    </div>
  );
}
```
if you want to use it across all your translated strings add it to i18next's init options instead:

```javascript
i18next
  .use(MarkdownPostprocessor)
  .init({
    postProcess: [ `markdownPostprocessor` ]
  });

// now you don't need to specify "postProcess: 'markdownPostprocessor'" when calling i18next.t
```

## License

ISC

