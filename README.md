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

## 开发模式

- TDD：先测试，之后补充业务
- BDD：先写业务，再对重要部分补充测试

## 快照测试

适用场景:

- 函数返回
- 接口结果
- 组件
- 老项目
- 组件 DOM 结构的对比

快照失败的两种可能:

- 修改后输出结果和以前记录的 `.snap` 不一致, 可能有bug, 要排查
- 代码更新导致输出结果和以前记录的 `.snap` 不一致, 新增功能改变了原有的 DOM 结构, 要用 `npx jest --updateSnapshot` 更新当前快照

避免快照失败的途径:

- 生成小快照; 只取最重要的部分生成快照, 但必须保证快照能让你看懂
- 合理使用快照; 快照测试不是只为组件测试服务,同样组件测试也不一定要包含快照测试; 快照能放一切可序列化的内容
