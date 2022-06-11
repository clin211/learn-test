// 使用 Jest 的 Spy 和扩展 expect 来 Mock `window.location`
import 'jest-location-mock';
import mockConsole from 'jest-mock-console';

// 过滤掉用例中写的 console
mockConsole();
