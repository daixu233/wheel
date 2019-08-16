const expect = chai.expect;
import Vue from 'vue'
import Popover from '../src/popover'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Popover', () => {
    //BDD 行为驱动测试

    it('存在.', () => {
        expect(Popover).to.exist
    })
    it('可以设置position.', (done) => {
        Vue.component('g-popover',Popover)
        const div = document.createElement('div')
        document.body.appendChild(div)
        div.innerHTML=`
        <g-popover position="top" ref="a">
            <template slot="content">
                popover内容
            </template>
            <button>点我</button>
        </g-popover>
        `
        const vm =new Vue({
            el:div
        })
        vm.$el.querySelector('button').click()
        setTimeout(()=>{
            expect(vm.$refs.a.$refs.contentWrapper.classList.contains('position-top')).to.be.true
            done()
        },0)
    })
    xit('可以设置trigger.', (done) => {
        Vue.component('g-popover',Popover)
        const div = document.createElement('div')
        document.body.appendChild(div)
        div.innerHTML=`
        <g-popover trigger="hover" ref="a">
            <template slot="content">
                popover内容
            </template>
            <button>点我</button>
        </g-popover>
        `
        const vm =new Vue({
            el:div
        })
        let event = new Event('mouseenter')
        vm.$el.dispatchEvent(event)
        setTimeout(()=>{
            expect(vm.$refs.a.$refs.contentWrapper).to.exist
            done()
        },0)
    })
})