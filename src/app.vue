<template>
  <div ref="app" class="app" :class="[activeFont]">
    <section class="head">
      <h1>WebAPP 基本交互指南</h1>
      <p @click="goGithub" class="github tooltip bottom" laout="row center-left" data-tooltip="comment / PR !">
        <i class="icon">&#xe85c;</i>
        <span>GitHub</span>
      </p>
    </section>
    <!-- 必须做的-->
    <div>
      <h2>你必须做的：</h2>
      <!-- 不要-->
      <section>
        <h4>不要</h4>
        <ul>
          <li>
            <h5>不要用 window.alert ！不要用 window.alert ！不要用 window.alert ！</h5>
          </li>
          <li>
            <h5>不要让 favicon 为空</h5>
          </li>
        </ul>
      </section>
      <!-- 他在哪里-->
      <section>
        <h4>告诉用户，他在哪里、这是什么</h4>
        <ul>
          <li>
            <h5>导航栏随时可见，菜单 TAB 有清晰可见的 active 状态来指引当前用户所在位置</h5>
          </li>
          <li>
            <h5>按钮、链接、菜单、文本的样式自然应该有比较大的区别</h5>
          </li>
          <li>
            <h5>输入框要有 placeholder 提示</h5>
            <demo>
              <div slot="b">
                <input type="text" class="full">
              </div>
              <div slot="g">
                <input type="text" class="full" placeholder="告诉我你的银行密码">
              </div>
            </demo>
          </li>
          <li>
            <h5>使用图标按钮要有意义贴切基本认知还要给予 tooltip 提示（以添加用户为例）</h5>
            <demo>
              <div slot="b">
                <div class="icon-button">
                  <i class="icon">&#xe672;</i>
                </div>
              </div>
              <div slot="g">
                <div class="icon-button tooltip" data-tooltip="新建用户">
                  <i class="icon">&#xe61f;</i>
                </div>
              </div>
            </demo>
          </li>
        </ul>
      </section>
      <!-- 操作反馈-->
      <section>
        <h4>告诉用户，他现在做了什么（操作输入反馈）</h4>
        <ul>
          <li>
            <h5>按钮及链接等可点击物体必须有<code>hover</code>及<code>press</code>和<code>disabled</code>状态</h5>
            <demo>
              <div slot="b">
                <div class="button" data-content="这是按钮？">
                </div>
                <div class="button" data-content="disabled">
                </div>
              </div>
              <div slot="g">
                <div class="button effect" data-content="这是按钮！" data-hover="我被 hover 了" data-active="我被 press 了">
                </div>
                <div class="button disabled" data-content="disabled">
                </div>
              </div>
            </demo>
          </li>
          <li>
            <h5>同样的，输入框等表单组件必须有<code>hover</code>和<code>focus</code>和<code>disabled</code>的状态</h5>
            <demo>
              <div slot="b">
                <input class="full" type="text" placeholder="输入**有惊喜"/>
                <input class="full" type="text" placeholder="disabled" readonly/>
              </div>
              <div slot="g">
                <input type="text" class="full effect" placeholder="输入**有惊喜"/>
                <input type="text" class="full disabled" placeholder="disabled" readonly/>
              </div>
            </demo>
          </li>
        </ul>
      </section>
      <!-- 状态反馈-->
      <section>
        <h4>告诉用户，正在发生什么（进行中状态反馈）</h4>
        <ul>
          <li>
            <h5>点击按钮提交表单时给一个<code>loading</code>指示（按钮局部，窗口全局选择看具体情况），并且 disable 相关行动操作防止重复提交</h5>
            <demo>
              <div slot="b">
                <div class="form-button" data-content="点击提交">
                </div>
              </div>
              <div slot="g">
                <div @click="buttonLoading = !buttonLoading" class="form-button" :class="{'loading': buttonLoading}"
                     data-content="点击提交">
                  <span class="spinner earth"></span>
                </div>
              </div>
            </demo>
          </li>
          <li>
            <h5>同样的，加载列表或图表数据时给予区域一个<code>loading</code>指示（同时列表初始状态应有一个最小高度来容纳 loading 指示器）</h5>
            <demo>
              <div slot="b">
                <div class="list" :class="{'loading': listLoading}">
                  <div class="units"></div>
                </div>
              </div>
              <div slot="g">
                <div class="list" :class="{'loading': listLoading}">
                  <div class="units"></div>
                  <span class="spinner earth"></span>
                </div>

              </div>
            </demo>
          </li>
        </ul>
      </section>
      <!-- 状态反馈2-->
      <section>
        <h4> 告诉用户，已经发生了什么（完成状态反馈）</h4>
        <ul>
          <li>
            <h5>一定要有错误提示且错误信息提示应有帮助：哪里出错了、该怎么处理而不是系统生成的代码直接给用户</h5>
            <demo>
              <div slot="b">
                <div class="info">403 Forbden</div>
              </div>
              <div slot="g">
                <div class="info">密码呢密码！！</div>
              </div>
            </demo>
          </li>
          <li>
            <h5>重要操作完成后有提醒（例如新建了个某个东西后提示“新建成功”再刷新列表）</h5>
          </li>
          <li>
            <h5>遇到空数据的情况，要标识数据为空，并根据情况给予用户一定操作指引</h5>
            <demo>
              <div slot="b">
                <div class="list" :class="{'loading': listLoading}">
                  <span class="spinner earth"></span>
                </div>
              </div>
              <div slot="g">
                <div class="list" :class="{'loading': listLoading}">
                  <div class="empty">没东西, <a href="#">点击去添加</a></div>
                  <span class="spinner earth"></span>
                </div>

              </div>
            </demo>
          </li>
        </ul>
      </section>
      <!-- 不要让肥胖的手-->
      <section>
        <h4>不要让肥胖的手做像素级别的定位</h4>
        <ul>
          <li>
            <h5>列表内的 checkbox 过小难以点击时可设置整个单元行为热区（同样的可以应用于点击查看详情等操作）</h5>
            <demo>
              <div slot="b">
                <div class="tr" layout="row center-left">
                  <div class="checkbox" @click="checkA = !checkA" :class="{'checked': checkA}"></div>
                  <span class="tip">←请为我亮灯</span>
                </div>
              </div>
              <div slot="g">
                <div class="tr hover" layout="row center-left" @click="checkB = !checkB">
                  <div class="checkbox" :class="{'checked': checkB}"></div>
                  <span class="tip">请为我亮灯</span>
                </div>
              </div>
            </demo>
          </li>
          <li>
            <h5>按钮过小时可通过为元素扩充隐形(<code>::pseudo</code>)可点击区域，但也要防止误操作</h5>
            <demo>
              <div slot="b">
                <div class="small-button" data-content="hover 我" data-hover="hovered!!"></div>
              </div>
              <div slot="g">
                <div class="small-button ex" data-content="hover 我" data-hover="hovered!!"></div>
              </div>
            </demo>
          </li>
        </ul>
      </section>
      <!-- 布局-->
      <section>
        <h4>布局</h4>
        <ul>
          <li>
            <h5>border 的变化不引起布局的抖动</h5>
            <demo>
              <div slot="b">
                <div class="border-button">hover 我</div>
              </div>
              <div slot="g">
                <div class="border-button bs">hover 我</div>
              </div>
            </demo>
          </li>
          <li>
            <h5>标题上下，段落上下，块上下要有合理的间隙（还有比你想象的要更大一些的 padding ！）</h5>
            <demo>
              <div slot="b">
                <div class="paragraph">
                  <p class="title"></p>
                  <p class="section"></p>
                  <p class="section"></p>
                </div>
              </div>
              <div slot="g">
                <div class="paragraph gap">
                  <p class="title"></p>
                  <p class="section"></p>
                  <p class="section"></p>
                </div>
              </div>
            </demo>
          </li>
          <li>
            <h5>不知道怎么排版？试试只用一种对齐方式！</h5>
            <demo>
              <div slot="b">
                <div class="paragraph gap" layout="column top-left">
                  <div layout="row center-justify">
                    <p class="section part"></p>
                    <p class="section part" self="right"></p>
                  </div>
                  <p class="title full" self="center"></p>
                  <div layout="row center-justify">
                    <p class="section part"></p>
                    <p class="section part" self="right"></p>
                  </div>
                </div>
              </div>
              <div slot="g">
                <div class="paragraph gap" layout="column top-right">
                  <p class="title full"></p>
                  <p class="section part l x"></p>
                  <p class="section part"></p>
                  <!--<p class="section part l"></p>-->
                  <!--<p class="section part"></p>-->
                </div>
              </div>
            </demo>
          </li>
        </ul>
      </section>
    </div>
    <!-- 可以做的-->
    <div>
      <h2>你可以做的：</h2>
      <!-- 减少用户点击成本-->
      <section>
        <h4>减少用户点击成本</h4>
        <ul>
          <li>
            <h5>常规表单校验（格式等）在提交前完成</h5>
          </li>
          <li>
            <h5>用撤销来替代弹框确认操作（常见于删除中）</h5>
            <demo>
              <div slot="b">
                <div class="icon-button tooltip" data-tooltip="点击删除" v-if="!delA" @click="delA = !delA">
                  <i class="icon">&#xe602;</i>
                </div>
                <div class="confirm" v-if="delA" @click="delA = !delA" layout="row bottom-right">

                </div>
              </div>
              <div slot="g">
                <div class="icon-button tooltip" data-tooltip="点击删除" v-if="!delB" @click="delB = !delB">
                  <i class="icon">&#xe602;</i>
                </div>
                <div class="icon-button tooltip" data-tooltip="撤销" @click="delB = !delB" v-else>
                  <i class="icon">&#xe619;</i>
                </div>
              </div>
            </demo>
          </li>
          <li>
            <h5>遇到不是特别重要的提示信息时或引导操作时，能不用弹窗就不用弹窗（试试 toast ，popover？）</h5>
          </li>
          <li>
            <h5>当选项较少（少于三个）时，考虑用按钮组来代替下拉列表</h5>
            <demo>
              <div slot="b">
                <div class="select">
                  <input id="s1" type="checkbox"/>
                  <label for="s1">请选择选项</label>
                  <div class="option"></div>
                </div>
              </div>
              <div slot="g">
                <div class="button-group" layout="row center-left">
                  <input id="bg1" type="radio" name="group" checked/>
                  <label for="bg1">选项1</label>
                  <input id="bg2" type="radio" name="group"/>
                  <label for="bg2">选项2</label>
                </div>
              </div>
            </demo>
          </li>
          <li>
            <h5>如果用户选中输入框大概率会重新输入内容（比如搜索框），那么请为他选中全部内容</h5>
            <demo>
              <div slot="b">
                <input type="text" class="full effect" value="focus 我"/>
              </div>
              <div slot="g">
                <input type="text" ref="input" class="full effect" value="focus 我" @focus="selectAll"/>
              </div>
            </demo>
          </li>
        </ul>
      </section>
      <!-- 让页面活泼点-->
      <section>
        <h4>让页面活泼点</h4>
        <ul>
          <li>
            <h5>试着加上一定的<code>transition</code>（硬朗风格的设计就算了），但要注意的是桌面端大部分<code>transition-duration</code>都应该在<code>150ms - 200ms</code>之间
          </h5>
            <demo>
              <div slot="b">
                <div
                  class="ts-button"
                  layout="row center-center"
                  :class="{'circled': moveA}"
                  @click="moveA = !moveA"
                >
                  <span>点我嘛</span>
                  <i class="icon">&#xe619;</i>
                </div>
              </div>
              <div slot="g">
                <div
                  class="ts-button transition"
                  layout="row center-center"
                  :class="{'circled': moveB}"
                  @click="moveB = !moveB"
                >
                  <span>点我嘛</span>
                  <i class="icon">&#xe619;</i>
                </div>
              </div>
            </demo>
          </li>
          <li>
            <h5>动画加上<code>timing-function</code>， 如果没时间琢磨的话， 用<code>cubic-bezier(0.4, 0, 0.2, 1)</code>就不会错</h5>
            <demo>
              <div slot="b">
                <div
                  class="ts-button transition3"
                  layout="row center-center"
                  :class="{'circled': moveC}"
                  @click="moveC = !moveC"
                >
                  <span>再点我嘛</span>
                  <i class="icon">&#xe619;</i>
                </div>
              </div>
              <div slot="g">
                <div
                  class="ts-button transition2"
                  layout="row center-center"
                  :class="{'circled': moveC}"
                  @click="moveC = !moveC"
                >
                  <span>再点我嘛</span>
                  <i class="icon">&#xe619;</i>
                </div>
              </div>
            </demo>
          </li>
          <li>
            <h5>当列表都是文字比较沉闷时，可以添加图标（对应身份或者行动按钮）或者添加色块颜色（对应各类状态）来表达信息</h5>
            <demo>
              <div slot="b">
                <div layout="column top-center">
                  <div class="tr b" layout="row center-spread">
                    <span>A</span>
                    <span>没死</span>
                    <span>杀手</span>
                  </div>
                  <div class="tr b" layout="row center-spread">
                    <span>A</span>
                    <span>死了</span>
                    <span>警察</span>
                  </div>
                </div>

              </div>
              <div slot="g">
                <div layout="column top-center">
                  <div class="tr b" layout="row center-spread">
                    <span>A</span>
                    <span class="sts s">没死</span>
                    <span>
                    <i class="icon">&#xe675;</i>
                    <span>杀手</span>
                  </span>
                  </div>
                  <div class="tr b" layout="row center-spread">
                    <span>B</span>
                    <span class="sts f">死了</span>
                    <span>
                    <i class="icon">&#xe6b0;</i>
                    <span>警察</span>
                  </span>
                  </div>
                </div>

              </div>
            </demo>
          </li>
        </ul>
      </section>
    </div>

    <!-- navigator-->
    <div class="nav__button mobile-show" @click="toggleMenu">{{menuTxt}}</div>

    <div class="nav" v-if="indexFlag" :class="{'show': menuVisible}">
      <div class="nav__h2" v-for="(h, i) in index" :key="i">
        <input class="nav__h2-check" name="ggggg" type="radio" :id="h.id + 'c'"/>
        <label class="nav__h2-title" :for="h.id + 'c'">{{h.text}}</label>
        <div class="nav__h4-wrap">
          <div class="nav__h4" v-for="w in h.children" :key="w.id">
            <a :href="'/#' + w.id" class="nav__h4-title">{{w.text}}</a>
          </div>
        </div>
      </div>
    </div>

    <!-- fonts-->
    <div class="fonts" layout="column center-left">
      <div class="fonts__option" :key="f.class" :class="{'active': activeFont === f.class}" v-for="f in fonts"
           @click="changeFont(f.class)" layout="row center-center">
        {{f.name}}
      </div>
    </div>

    <p class="fonts__tip">如有疑问可联系 @<a target="_blank" href="https://github.com/waynecz">waynecz</a>，另页面左下角可修改字体</p>

  </div>
</template>

<script>
import demo from './components/demo.vue'
import spec from './components/spec.vue'

export default {
  name: 'app',
  components: {
    demo,
    spec
  },
  data() {
    return {
      buttonLoading: false,
      listLoading: false,
      checkA: false,
      checkB: false,
      delA: false,
      delB: false,
      moveA: false,
      moveB: false,
      moveC: false,
      font: '',
      index: [],
      indexFlag: false,
      fonts: [
        {
          name: '尚雅',
          class: 'shangya'
        },
        {
          name: '天真',
          class: 'tongzhen'
        },
        {
          name: '雅黑',
          class: 'yahei'
        }
      ],
      activeFont: '',
      menuVisible: false
    }
  },
  computed: {
    menuTxt() {
      return this.menuVisible ? '关闭' : '目录'
    }
  },
  mounted() {
    /* eslint-disable*/
    this.activeFont = window.localStorage.getItem('font') || 'shangya'

    this.generateIndex()

    setTimeout(() => {
      this.listLoading = true
    }, 1000)
  },
  methods: {
    goGithub() {
      window.location.href = 'https://github.com/waynecz/UX-easy-guide'
    },
    toggleMenu() {
      this.menuVisible = !this.menuVisible
    },
    toggleNav(e) {
      let radio = document.getElementById(e.currentTarget.getAttribute('for'))
      if (radio.checked) {
        let fakeRadio = document.getElementById('fakeRadio')
        fakeRadio.click()
        console.log(fakeRadio.checked)
      }
    },
    selectAll() {
      this.$refs.input.select()
    },
    generateIndex() {
      let h2 = this.$refs.app.querySelectorAll('h2')
      h2.forEach((e, i) => {
        e.id = `q${i}`
        let _h2 = {
          text: e.innerText.replace('：', ''),
          id: e.id
        }

        let h4 = e.parentNode.querySelectorAll('h4')

        h4.forEach((ele, idx) => {
          ele.id = `${e.id}w${idx}`
          !_h2.children && (_h2.children = [])
          _h2.children.push({
            text: ele.innerText.replace('', ''),
            id: ele.id
          })
        })
        this.index.push(_h2)
      })
      this.indexFlag = true
    },
    changeFont(name) {
      this.activeFont = name
      window.localStorage.setItem('font', this.activeFont)
    }
  },
  watch: {
    listLoading(val) {
      if (val) {
        setTimeout(() => {
          this.listLoading = false
        }, 3000)
      } else {
        setTimeout(() => {
          this.listLoading = true
        }, 2000)
      }
    }
  }
}
</script>

<style lang="scss">
@import './scss/index';
</style>
