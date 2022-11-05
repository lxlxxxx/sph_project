import Mock from "mockjs"
import banner from "./banner.json"
import flooer from "./floor.json"
Mock.mock("/mock/banner",{code:200,data:banner})
Mock.mock("/mock/floor",{code:200,data:flooer})