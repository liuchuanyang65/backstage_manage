const menuList = [
  {
    title: '首页',
    path: '/home'
  }, {
    title: 'demo',
    path: '/demo',
    children: [
      {
        title: '渲染JSX',
        path: '/demo/one'
      }, {
        title: '在JSX中使用JavaScript',
        path: '/demo/two'
      }, {
        title: '在JSX中使用数组',
        path: '/demo/three'
      }, {
        title: '定义一个组件',
        path: '/demo/four'
      }, {
        title: 'this.props.children',
        path: '/demo/five'
      }, {
        title: 'PropTypes',
        path: '/demo/six'
      }, {
        title: '查找DOM节点',
        path: '/demo/seven'
      }, {
        title: 'this.state',
        path: '/demo/eight'
      }, {
        title: '表格',
        path: '/demo/nine'
      }, {
        title: '组件生命周期',
        path: '/demo/ten'
      }, {
        title: 'Ajax',
        path: '/demo/eleven'
      }, {
        title: '显示Promise的值',
        path: '/demo/twelve'
      }, {
        title: '服务器端渲染',
        path: '/demo/thirteen'
      }
    ]
  }
]

export default menuList