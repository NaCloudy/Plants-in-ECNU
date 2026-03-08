//main.ts无法识别.vue3模块，需要声明
declare module 'particles.vue3' {
    import Particles from 'particles.vue3';
    const componentOptions: Particles
    export default componentOptions
}
