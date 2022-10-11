# README

## 执行所有单元测试

```sh
npm run test # yarn test
```

## 测试指定单测文件

```sh
npm run test <file path> # yarn test <file path>
```

## 覆盖率报告

Jest 会在 coverage 目录下生成不同格式的覆盖率报告文件，有 XML，JSON，也有 HTML 的。各种格式文件描述的内容都是一样的, Jest 也支持生成网页的测试报告，打开 lcov-report/index.html 就可以查看网页版的测试报告

```sh
├── clover.xml             # Clover XML 格式的覆盖率报告
├── coverage-final.json    # JSON 格式的覆盖率报告
├── lcov-report            # HTML 格式的覆盖率报告
│   ├── base.css
│   ├── block-navigation.js
│   ├── favicon.png
│   ├── index.html         # 覆盖率根文件
│   ├── prettify.css
│   ├── prettify.js
│   ├── sort-arrow-sprite.png
│   ├── sorter.js
│   └── sum.js.html        # sum.js 的覆盖率情况
└── lcov.info
```
