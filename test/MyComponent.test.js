import { mount } from '@vue/test-utils'
import MyComponent from '../src/components/MyComponent.vue'

const myComponent = mount(MyComponent, {
  propsData: {
    msg: "Message"
  }
})

test('MyComponent Recieves msg prop', () => {
  expect(myComponent.vm.msg).toEqual("Message")
})

test('MyComponent to have .my-component class', () => {
  expect(myComponent.classes()).toContain('my-component')
})
