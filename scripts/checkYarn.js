if (!/yarn\.js$/.test(process.env.npm_execpath || '')) {
  console.warn('\u001b[33m 请用 yarn 安装，避免产生其他lock文件。\u001b[39m\n');
  process.exit(1);
}
