#### State

- 一切界面变化都是状态state变化
- state的修改必须通过setState()方法
  - this.state.likes = 100; // 这样的直接赋值修改无效！
  - setState 是一个 merge 合并操作，只修改指定属性，不影响其他属性
  - setState 是异步操作，修改不会马上生效

#### 高度和宽度

- React Native 中的尺寸都是无单位的，表示的是与设备像素密度无关的逻辑像素点。

#### 网络

- React Native 提供了和 web 标准一致的[Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)，用于满足开发者访问网络的需求。如果你之前使用过`XMLHttpRequest`(即俗称的 ajax)或是其他的网络 API，那么 Fetch 用起来将会相当容易上手。

- 网络请求天然是一种异步操作（译注：同样的还有[asyncstorage](https://reactnative.cn/docs/network/asyncstorage.html)，请不要再问怎样把异步变成同步！无论在语法层面怎么折腾，它们的异步本质是无法变更的。异步的意思是你应该趁这个时间去做点别的事情，比如显示 loading，而不是让界面卡住傻等）。