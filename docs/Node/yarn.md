---
tags: [node, yarn]
---
# Yarn - Node.js 的套件管理工具



## Npm 與 Yarn 指令比較

| NPM                                | Yarn                      | 說明                       |
| ---------------------------------- | ------------------------- | -------------------------- |
| npm install                        | yarn install              | -                          |
| npm install [package]              | X                         | 不支援直接安裝套件         |
| npm install --save [package]       | yarn add [paakage]        | 僅是將 --save 改成 add     |
| npm install --save-dev [package]   | yarn add [paakage] --dev  |                            |
| npm install --global [package]     | yarn global add [package] | 這段還沒測過 global 的差異 |
| npm uninstall [package]            | x                         |                            |
| npm uninstall --save [package]     | yarn remove [package]     |                            |
| rm -rf node_modules && npm install | yarn upgrade              | 移除再安裝 變 直接升級套件 |

[更多的語法](https://classic.yarnpkg.com/en/docs/migrating-from-npm)

