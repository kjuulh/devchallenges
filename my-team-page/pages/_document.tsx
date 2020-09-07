import Document, { DocumentContext } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
            <link
              rel='stylesheet'
              href='https://cdnjs.cloudflare.com/ajax/libs/normalize/7.0.0/normalize.css'
            />
            <link
              href='https://fonts.googleapis.com/css2?family=Inconsolata:wght@300;400;500;700&display=swap'
              rel='stylesheet'
            />
            <style jsx global>
              {`
                *,
                button {
                  font-family: 'Inconsolata', monospace;
                }
              `}
            </style>
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
}
