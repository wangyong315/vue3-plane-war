
import { Sprite, Container, Text, Texture } from "pixi.js";
import { createRenderer } from "vue";

export const renderer = createRenderer<Container, Container>({
    createElement(type) {
        let element
        switch (type) {
            case 'Container':
                element = new Container()
                break;

            case 'Sprite':
                element = new Sprite()
                break;
            default:
                throw new Error(`${type} 不存在`);

                break;
        }
        return element
    },
    patchProp(el,key, prevValue, nextValue){
        switch (key) {
            case 'texture':
                (el as Sprite).texture = Texture.from(nextValue)
                break;

            default:
              el[key] = nextValue
                break;
        }
    },
    insert(el, parent){
        if(el && parent) {
            parent.addChild(el)
        }
    },
    remove(el){
        if(el && el.parent) {
            el.parent.removeChild(el)
        }
    },
    createText(text) {
        return new Text(text)
    },
    setText(){},
    setElementText(){},
    createComment(text){
        return new Text(text)
    },
    parentNode(node){
        return node.parent
    },
    nextSibling(){
        return null
    }
})


export const createApp = (rootComponent:any) => {
  return renderer.createApp(rootComponent)
}
