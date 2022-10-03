import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BuildOptions } from './types/config';
import { buildCssLoader } from './loaders/buildCssLoader';

export function buildLoaders({ isDev }: BuildOptions): webpack.RuleSetRule[] {
    const svgLoader = {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ['@svgr/webpack'],
    };

    const babelLoader = {
        test: /\.(js|jsx|tsx)$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env', '@babel/preset-react'],
                plugins: [
                    [
                        'i18next-extract',
                        {
                            locales: ['ru', 'en'],
                            keyAsDefaultValue: ['ru'],
                        },
                    ],
                ],
            },
        },
    };

    const fileLoader = {
        test: /\.(png|jpe?g|gif|woff2|woff)$/i,
        use: [
            {
                loader: 'file-loader',
            },
        ],
    };

    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };

    const scssLoader = buildCssLoader(isDev);

    // const cssLoader = {
    //     test: /\.css$/i,
    //     use: [
    //         options.isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
    //         {
    //             loader: 'css-loader',
    //             options: {
    //                 modules: true
    //             }
    //         },
    //     ]
    // }

    return [
        fileLoader,
        svgLoader,
        babelLoader,
        typescriptLoader,
        scssLoader,
    ];
}
