const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const {ImageBuffer} = require("imager-io");

const mode = "production";

module.exports = {
    mode,
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
        new CopyPlugin([
            {
                from: 'assets',
                to: 'public',
                async transform(content, _) {
                    // `content` is of type `Buffer`:
                    console.assert(content instanceof Buffer);

                    // Optimize the JPEG Image:
                    const opt = async () => {
                        return ImageBuffer
                            .from_buffer(content)
                            .then(x => x.opt())
                            .then(x => x.to_buffer())
                    };
                    
                    // Only optimize for 'production' builds:
                    if (mode == "production") {
                        return opt();
                    } else {
                        return content;
                    }
                }
            },
        ]),
    ],
};