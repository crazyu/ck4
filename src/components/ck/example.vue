<template>
  <div class="list-app">
    <ckeditor id='5' key=5 ref="ckeditor_5" />
    <!-- <ckeditor id='6' key=6 ref="ckeditor_6" /> -->
    <!-- <ckeditor id=4 ref="ckeditor2" />
    <ckeditor id=5 ref="ckeditor3" />
    <ckeditor id=6 ref="ckeditor4" />
    <ckeditor id=7 ref="ckeditor5" />
    <ckeditor id=8 ref="ckeditor6" />
    <ckeditor id=9 ref="ckeditor7" />
    <ckeditor id=10 ref="ckeditor8" />
    <ckeditor id=11 ref="ckeditor9" /> -->
    <!-- <div v-for="(item, index) of testArr" :key="index">
       <ckeditor :id="`${index}`" :ref="`ckeditor_${index}`" />
    </div> -->
    <div class="test" @click="test">赋值</div>
    <div class="test" @click="setValue">设置值</div>
    <div class="test" @click="insertValue">插入值</div>
    <div class="test" @click="clearValue">请空值</div>
    <span class="mathJax_latex">
      <!-- <span v-html="test1"></span> -->
      20: <span v-html="test20"></span>
      0: <span v-html="test0"></span>
      21: <span v-html="test21"></span>
      <!-- <span v-html="test2"></span>
      <span v-html="test3"></span>
      <span v-html="test4"></span>
      <span v-html="test5"></span>
      <span v-html="test6"></span>
      <span v-html="test7"></span>
      <span v-html="test8"></span>
      <span v-html="test9"></span>
      <span v-html="test10"></span>
      第十一：<span v-html="test11"></span>
      <span v-html="test12"></span>
      <span v-html="test13"></span>
      <span v-html="test14"></span>
      <span v-html="test15"></span>
      <span v-html="test16"></span>
      <span v-html="test17"></span>
      <span v-html="test18"></span>
      21: <span v-html="test21"></span> -->
    </span>
  </div>
</template>
<script>
import ckeditor from '@/components/ck/index'
export default {
  components: {
    ckeditor
  },
  data () {
    return {
      testArr: [0, 1],
      // test1: '<p><span name="radius" class="math-tex">x=y+a\sin x \tag{*}</span></p>', // eslint-disable-line
      test0: '',
      test20: '<p><span class="math-tex">$$\\(x = {-b \\pm \\sqrt{b^2-4ac} \\over 2a}\\)$$</span></p>', // eslint-disable-line
      test2: '<p><span name="radius" class="math-tex">\sum\limits_{i=1}^{21}{{{x}_{i}}}=1575,\dfrac{1}{21}\sum\limits_{i=1}^{21}{x_{i}^{2}}=5741,\sum\limits_{i=1}^{21}{{{y}_{i}}}=1554,\dfrac{1}{21}\sum\limits_{i=1}^{21}{{{x}_{i}}{{y}_{i}}}=5666</span></p>', // eslint-disable-line
      test3: '<p><span name="radius" class="math-tex"></p>', // eslint-disable-line
      test4: '<p><span name="radius" class="math-tex">$$ c^{2}=a^{2}+b^{2}$$</span></p>', // eslint-disable-line
      test5: '<p><span name="radius" class="math-tex">$\\epsilon > 0$</span></p>', // eslint-disable-line
      test6: '<p><span name="radius" class="math-tex">$\\lim_{n \\to \\infty}\\sum_{k=1}^n\\frac{1}{k^2}=\\frac{\\pi^2}{6}$</span></p>', // eslint-disable-line
      test7: '<p><span name="radius" class="math-tex">$$\\lim_{n \\to \\infty}\\sum_{k=1}^n\\frac{1}{k^2}=\\frac{\\pi^2}{6}$$</span></p>', // eslint-disable-line
      test8: '<p><span name="radius" class="math-tex">$\\forall x\\in\\mathbf{R}:\\qquad x^2\\geq 0$</span></p>', // eslint-disable-line
      test9: '<p><span name="radius" class="math-tex">$x^2 \\geq 0 \\qquad \\textrm{for all} x \\in \\mathbf{R}$</span></p>', // eslint-disable-line
      test10: '<p><span name="radius" class="math-tex">$x^2 \\geq 0 \\qquad \\textrm{for all} x \\in \\mathbb{R}$</span></p>', // eslint-disable-line
      test11: '<p><span name="radius" class="math-tex">$\\big\\|  \\Big\\|  \\bigg\\|  \\Bigg\\|$</span></p>', // eslint-disable-line
      test12: '<p><span name="radius" class="math-tex">$a$</span></p>', // eslint-disable-line
      test13: `<p><span name="radius" class="math-tex">$$\\begin{cases}
a_1x+b_1y+c_1z=d_1\\\\
a_2x+b_2y+c_2z=d_2\\\\
a_3x+b_3y+c_3z=d_3\\\\
\\end{cases}
$$</span></p>`, // eslint-disable-line
      test14: `<p><span name="radius" class="math-tex">$$\\begin{array}{c|lll}
{↓}&{a}&{b}&{c}\\\\
\\hline
{R_1}&{c}&{b}&{a}\\\\
{R_2}&{b}&{c}&{c}\\\\
\\end{array}$$</span></p>`, // eslint-disable-line
      test15: '<p><span name="radius" class="math-tex">$a$</span></p>', // eslint-disable-line
      test16: '<p><span name="radius" class="math-tex">$a$</span></p>', // eslint-disable-line
      test17: '<p><span name="radius" class="math-tex">$a$</span></p>', // eslint-disable-line
      test18: '<p><span name="radius" class="math-tex">$\\underbrace{a+b+\\cdots + z}$</span></p>', // eslint-disable-line
      // $x_1,\ldots , x_n \qquad x_1+\cdots + x_n \qquad {x_1  \qquad x_n \choose x_1 \ddots   x_n}$
      test21: '<p><span class="math-tex">$x_1,\\ldots , x_n \\qquad x_1+\\cdots + x_n \\qquad {x_1  \\qquad x_n \\choose x_1 \\ddots   x_n}$</span></p>',
      test22: 5,
      value: ''
      // test21: '<p><span class="math-tex">\($x_1,\ldots , x_n \qquad x_1+\cdots + x_n \qquad {x_1  \qquad x_n \choose x_1 \ddots   x_n}$\)</span></p>'
    }
  },
  mounted () {
    // if (!this.commonsVariable.isMathjaxConfig) { // 判断是否初始配置，若无则配置。
    //   this.commonsVariable.initMathjaxConfig()
    // }
    // this.commonsVariable.MathQueue('radiusWrapper') // 传入组件id，让组件被MathJax渲染
    this.initMath()
  },
  activated () {
  },
  methods: {
    test () {
      // const test = [0, 1]
      // console.log(this.$refs)
      // console.log(this.$refs.ckeditor_0[0])
      // console.log(this.$refs.ckeditor_0[0].getContent())
      console.log('执行')
      let value = this.$refs.ckeditor_5.getContent()
      console.log('---', value)
      this.value = value
      this.test0 = value
      // this.test0 = value.replace(/\\/g, '\\\\')
      console.log(this.test0)
      console.log(value.replace(/\\/g, '\\\\'))
      this.$nextTick(() => {
        this.initMath()
      })
      // console.log(value, `'${value}'`)
      // value = value.replace(/\\/g, '\\\\')
      // console.log('单个', value)
      // console.log('多个', value.replace(/\\\\/g, '\\\\\\\\'))
      // console.log(this.$refs.ckeditor_6.getContent())
      // test.map(item => console.log(this.$refs[`ckeditor_${item}`][0].getContent()))
    },
    setValue () {
      // const str = `<p><math xmlns="http://www.w3.org/1998/Math/MathML"><msqrt><mn>33</mn></msqrt></math></p>` // eslint-disable-line
      this.$refs.ckeditor_5.setContent(this.value)
    },
    insertValue () {
      const underLine = '</span>_____</span>'
      this.$refs.ckeditor_5.insertContent(underLine)
    },
    clearValue () {
      this.$refs.ckeditor_5.setContent('')
    },
    initMath () {
      if (this.commonsVariable.isMathjaxConfig) { // 判断是否初始配置，若无则配置。
        this.commonsVariable.initMathjaxConfig()
      }
      this.commonsVariable.MathQueue('mathJax_latex') // 传入组件id，让组件被MathJax渲染
    }
  }
}
</script>

<style lang="less">

</style>

<style lang="less" scoped>
.list-app {
  height: 100%;
  width: 100%;
}
.test{
  margin: 10px;
  cursor: pointer;
}
</style>
