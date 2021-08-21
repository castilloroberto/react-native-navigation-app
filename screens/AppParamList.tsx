import { RouteProp } from "@react-navigation/native"
import { StackNavigationProp } from "@react-navigation/stack"

export type AppParamList = {
    CounterScreen:undefined
    PaquetesScreen:undefined
    SendScreen:undefined
    TabScreen:undefined
    SimpleScreen:undefined
}
export type AppProps<T extends keyof AppParamList> ={
    navigation:StackNavigationProp<AppParamList,T>,
    route:RouteProp<AppParamList,T>
}

export type Recarga = {
    key:string
    description:string
    duration:string
    price:number
    title:string
}