<template>
  <div>

    <div><h2>页面：</h2>
      <!-- 尺寸-->
      <section>
        <h4>设计尺寸</h4>
        <ul>
          <li>
            <h5>WIN: 1366 * 768</h5>
          </li>
          <li>
            <h5>MAC: 1280 * 800</h5>
          </li>
          <li>
            <h5>浏览器顶栏高度:  200px 以内，以 chrome 为准</h5>
          </li>
          <li>
            <h5>在设计纵向不滚动的页面时，高度应该减去顶栏高度</h5>
          </li>
        </ul>
      </section>
      <!-- 字号-->
      <section>
        <h4>字号（最少区分三种类型）</h4>
        <ul>
          <li>
            <h5>标题:   16 - 24px，无硬性规定</h5>
          </li>
          <li>
            <h5>内容正文:   14px</h5>
          </li>
          <li>
            <h5>辅助文字:   说明，提醒等类型，12px 字号。颜色 < 50%灰度。</h5>
          </li>
        </ul>
      </section>
      <!-- 图片-->
      <section>
        <h4>图片</h4>
        <ul>
          <li>
            <h5>至少 1 px 的边框，防止图片与页面背景重合</h5>
          </li>
          <li>
            <h5>加载不出图片时，应有默认背景</h5>
            <demo>
              <div slot="b">
                <img src="xxxxx" alt="">
              </div>
              <div slot="g">
                <div class="img-err" layout="row center-center">
                  💀 资源未正确加载
                </div>
              </div>
            </demo>
          </li>
        </ul>
      </section>
      <!-- 页面跳转-->
      <section>
        <h4>页面跳转</h4>
        <ul>
          <li>
            <h5>有入口就得有出口，别让用户去习惯浏览器自带的返回①</h5>
          </li>
          <li>
            <h5>如果是针对于某个对象进行的操作，内容又不多时，可以用弹框取代页面跳转。弹框能更清晰的了解页面层级关系</h5>
          </li>
        </ul>
        <div class="img-wrapper">
          <img src="../assets/gudingrukou.png" alt="">
          <span>① 固定出口</span>
        </div>
      </section>
      <!-- 表格-->
      <section>
        <h4>表格</h4>
        <ul>
          <li>
            <h5>表头：样式上应有明显差别。字号、颜色、加粗等</h5>
          </li>
          <li>
            <h5>单元格：文字左对齐，数字金额等右对齐</h5>
          </li>
          <li>
            <h5>统一操作按钮样式，常见操作可用 icon 代替，不易识别的 icon 最好用文字代替</h5>
          </li>
          <li>
            <h5>内容换行：表格换行总会很难看，如果要换行，就把内容显示完整，不要超过第二行又给省略了</h5>
          </li>
          <li>
            <h5>内容不换行：超出一行省略，鼠标 hover 展示完整内容</h5>
          </li>
          <li>
            <h5>内容超过20-30行，增加分页</h5>
          </li>
          <li>
            <h5>增大每行行高可以减少视觉压力与错行率。如果行高固定很小，可用斑马纹类型表格（奇偶行的背景色不一样）</h5>
          </li>
          <li>
            <h5>表格列数太多导致横向滚动时，操作列可单独提出固定</h5>
          </li>
        </ul>
      </section>
      <!-- 分页-->
      <section>
        <h4>分页</h4>
        <p>页面分类</p>
        <ul>
          <li><h5>增加直接前往 * 页的功能。</h5></li>
        </ul>
        <p>表格分页</p>
        <ul>
          <li><h5>显示总数据数。（共 * 条）</h5></li>
          <li><h5>增加调整每页显示数量的功能，提升可控性。</h5></li>
        </ul>
      </section>
      <!-- 消息提示 -->
      <section>
        <h4>消息提示(成功、警示、错误等)</h4>
        <ul>
          <li><h5>显示方式：页面顶部、底部滑出，中部渐显。</h5></li>
          <li><h5>显示时间：一般3s。</h5></li>
          <li><h5>虽然会自动消失，但是还是建议加上关闭按钮。</h5></li>
        </ul>
      </section>
      <!-- 页面加载 -->
      <section>
        <h4>页面加载</h4>
        <ul>
          <li><h5>icon 居中加载。</h5></li>
          <li><h5>页面顶部进度条加载①。</h5></li>
          <li><h5>页面跳转源处加载②。</h5></li>
        </ul>
        <div class="img-wrapper">
          <img src="../assets/liulanqi.gif" alt="">
          <img src="../assets/anniu.gif" alt="">
        </div>
      </section>
      <!-- 上传 -->
      <section>
        <h4>上传</h4>
        <ul>
          <li><h5> 增加上传进度提示。</h5></li>
          <li><h5> 鼠标点击上传成功条目，可替换。</h5></li>
        </ul>
      </section>
      <!-- 下拉框 -->
      <section>
        <h4>下拉框</h4>
        <ul>
          <li><h5>应有三种状态，当前选择、可选、禁选。</h5></li>
          <li><h5>下拉内容数量较多时，增加搜索功能。</h5></li>
        </ul>
      </section>
      <!-- 按钮 -->
      <section>
        <h4>按钮</h4>
        <ul>
          <li><h5>按钮至少有两种大小，应用在不同场景。</h5></li>
          <li><h5>按钮组应该强调出主次，一般 填充+文字  >  边框+文字   >   纯文字。</h5></li>
          <li><h5>按钮组里，高亮的按钮数不要大于2。</h5></li>
        </ul>
      </section>
      <!-- 搜索框 -->
      <section>
        <h4>搜索框</h4>
        <ul>
          <li><h5>产品没要求的时候默认开启模糊搜索。</h5></li>
          <li><h5>回车搜索的键盘事件，别忘了。</h5></li>
          <li><h5>搜索成功保留原搜索字段，增加 X 按钮，一键清空。</h5></li>
          <li><h5>搜索值为空，得有文案提示。</h5></li>
        </ul>
      </section>
      <!-- 全选框 -->
      <section>
        <h4>全选框</h4>
        <ul>
          <li><h5>单击全选，再点取消全选。</h5></li>
          <li><h5>全选状态下，取消某项勾选。此时全选框取消勾选。</h5></li>
        </ul>
      </section>
      <!-- 弹框 -->
      <section>
        <h4>弹框</h4>
        <ul>
          <li><h5>弹框高度不建议超出页面可视区高度。我个人最大高度定 550 px 左右。</h5></li>
          <li><h5>弹框高宽都可以根据分辨率自适应的，主要看弹框场景，如果是内容展示型的弹框，建议高宽不要写死。别忘了最小高度。</h5></li>
          <li><h5>弹框最好还是加上遮罩。</h5></li>
          <li><h5>一定要在遮罩上增加关闭弹框的事件，不要依赖弹框自带的那个小小的 X。</h5></li>
          <li><h5>弹框常见类型一般为三类：二次确认弹框、编辑框(带有操作栏)①、纯内容展示型 (如微博查看大图)③。</h5></li>
        </ul>
        <div class="img-wrapper">
          <img src="../assets/bianjikuang.png" alt="">
          <span>① 编辑框</span>
          <img src="../assets/weibochangtu.png" alt="">
          <span>② 微博长图</span>
        </div>
      </section>
    </div>

    <div><h2>数据交互</h2>
      <!-- 删除数据 -->
      <section>
        <h4>删除数据</h4>
        <ul>
          <li><h5>在产品没有要求的情况下，默认加上删除确认框。</h5></li>
          <li><h5>如果可以，加上删除动画。</h5></li>
          <li><h5>当删除的数据关联到其他页面，要在弹框内给予说明。</h5></li>
        </ul>
      </section>
      <!-- 新增数据 -->
      <section>
        <h4>新增数据</h4>
        <ul>
          <li><h5>首行插入。</h5></li>
          <li><h5>如果可以，加上新增动画。</h5></li>
        </ul>
      </section>
      <!-- 修改数据 -->
      <section>
        <h4>修改数据</h4>
        <ul>
          <li><h5>提交失败，保留之前填写数据。</h5></li>
          <li><h5>提交成功，返回入口，刷新数据。</h5></li>
          <li><h5>提交按钮点击一次后，进入禁用状态。</h5></li>
          <li><h5>取消修改或通过其他入口跳出当前状态时，二次弹框提示如“修改数据将丢失，是否离开”。</h5></li>
        </ul>
      </section>
      <!-- 日期数据 -->
      <section>
        <h4>日期数据</h4>
        <ul>
          <li><h5>今年的日期可省略年份，XX-XX。</h5></li>
          <li><h5>如果产品没有要求，数据排序按照创建日期-时间排序。</h5></li>
        </ul>
      </section>
    </div>

  </div>
</template>

<script>
  import demo from './demo.vue';

  export default {
    props: {
      align: {
        default: 'h'
      }
    },
    name: 'app',
    components: {
      demo
    }
  };
</script>

<style lang="scss">
  $primary: #f7ff4b;

  .img-wrapper {
    width: 100%;

    img {
      width: 100%;
      box-shadow: 0 0 8px rgba(0, 0, 0, .3);
      margin-bottom: 20px;
    }

    span {
      display: block;
      text-align: center;
      margin-bottom: 40px;
    }
  }
</style>
