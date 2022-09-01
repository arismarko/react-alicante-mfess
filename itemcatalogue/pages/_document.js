import Document, { Html, Head, Main, NextScript } from 'next/document'
import {
    ExtendedHead,
    revalidate,
    flushChunks,
    DevHotScript,
  } from "@module-federation/nextjs-ssr/flushChunks";

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        ctx.res.on("finish", () => {
          revalidate().then(() => {
          });
        });
        const remotes = await flushChunks(process.env.REMOTES);
      
        console.log(Document);

        const initialProps = await Document.getInitialProps(ctx);
      
      
        return {
          ...initialProps,
          remoteChunks: remotes,
        };
    }

    render() {
        return (
            <Html>
                <Head />
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument