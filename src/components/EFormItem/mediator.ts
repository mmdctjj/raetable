export const mediator = (function () {
  let topics: {[key: string]: {callback: (value: any) => void, uuid: number}[]} = {}, uuid = 0;

  function subscribe (topic: string, callback: (value: any) => void) {
      uuid ++
      topics[topic] = topics[topic]
          ? [...topics[topic], { callback, uuid }]
          : [{ callback, uuid }]
  }

  function publish (topic: string, value: any) {

      if (topics[topic]) {
          topics[topic].map(item => item.callback(value))
      }
  }
  return {
      install: function (obj: any) {
          obj.uuid = uuid
          obj.publish = publish
          obj.subscribe = subscribe
          return obj
      } 
  }
})()