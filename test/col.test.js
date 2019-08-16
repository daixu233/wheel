const expect = chai.expect;
import Vue from 'vue'
import Col from '../src/col'
import Row from '../src/row'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Row', () => {
    //BDD 行为驱动测试
    it('存在',()=>{
        expect(Row).to.exist
    })
    it('接收span属性', () => {
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Col)
        const vm = new Constructor({
            propsData: {
                span: 1
            }
        }).$mount(div)
        const element = vm.$el
        expect(vm.$el.classList.contains('col-1')).to.equal(true)
        div.remove()
        vm.$destroy()
    })
    it('接收offset属性', () => {
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Col)
        const vm = new Constructor({
            propsData: {
                offset: 1
            }
        }).$mount(div)
        const element = vm.$el
        expect(vm.$el.classList.contains('offset-1')).to.equal(true)
        div.remove()
        vm.$destroy()
    })
    it('接收pc属性', () => {
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Col)
        const vm = new Constructor({
            propsData: {
                pc: {span:1,offset:2}
            }
        }).$mount(div)
        const element = vm.$el
        expect(vm.$el.classList.contains('col-pc-1')).to.equal(true)
        expect(vm.$el.classList.contains('offset-pc-2')).to.equal(true)
        div.remove()
        vm.$destroy()
    })
    it('接收ipad属性', () => {
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Col)
        const vm = new Constructor({
            propsData: {
                ipad: {span:1,offset:2}
            }
        }).$mount(div)
        const element = vm.$el
        expect(vm.$el.classList.contains('col-ipad-1')).to.equal(true)
        expect(vm.$el.classList.contains('offset-ipad-2')).to.equal(true)
        div.remove()
        vm.$destroy()
    })
    it('接收narrowpc属性', () => {
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Col)
        const vm = new Constructor({
            propsData: {
                narrowpc: {span:1,offset:2}
            }
        }).$mount(div)
        const element = vm.$el
        expect(vm.$el.classList.contains('col-narrowpc-1')).to.equal(true)
        expect(vm.$el.classList.contains('offset-narrowpc-2')).to.equal(true)
        div.remove()
        vm.$destroy()
    })
    it('接收widepc属性', () => {
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Col)
        const vm = new Constructor({
            propsData: {
                widepc: {span:1,offset:2}
            }
        }).$mount(div)
        const element = vm.$el
        expect(vm.$el.classList.contains('col-widepc-1')).to.equal(true)
        expect(vm.$el.classList.contains('offset-widepc-2')).to.equal(true)
        div.remove()
        vm.$destroy()
    })
})
