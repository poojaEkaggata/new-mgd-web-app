"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var react_1 = require("react");
require("@/styles/globals.scss");
require("../styles/globals.scss");
var link_1 = require("next/link");
var react_2 = require("@prismicio/react");
var next_1 = require("@prismicio/next");
var prismicio_1 = require("../prismicio");
/* import Layout from '../components/Layout'; */
function App(_a) {
    var Component = _a.Component, pageProps = _a.pageProps;
    return (react_1["default"].createElement(react_2.PrismicProvider, { internalLinkComponent: function (props) { return react_1["default"].createElement(link_1["default"], __assign({}, props)); } },
        react_1["default"].createElement(next_1.PrismicPreview, { repositoryName: prismicio_1.repositoryName },
            react_1["default"].createElement(Component, __assign({}, pageProps)))));
}
exports["default"] = App;
/* import React from 'react';
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import '@/styles/globals.scss';
import '../styles/globals.scss';
import Link from 'next/link';
import { PrismicProvider } from '@prismicio/react';
import { PrismicPreview } from '@prismicio/next';
import { repositoryName } from '../prismicio';
import { Layout } from '../components/Layout';

const Home: NextPage = ({Component,pageProps}) => {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default Home */ 
