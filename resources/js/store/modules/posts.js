export const Post = {
    // state: {
    //     post: null,
    //     posts: null
    // },
    // getters: {
    //     post: state => state.post,
    //     posts: state => state.posts
    //
    // },
    // mutations: {
    //     setPost(state, post){
    //         state.post = post
    //     },
    //     setPosts(state, posts){
    //         state.posts = posts
    //     }
    // },
    // actions: {
    //     getPost(context, id) {
    //         return axios.get(`/api/posts/${id}`).then(
    //             response => {
    //                 context.commit('setPost', response.data.data)
    //             }
    //         )
    //     },
    //     getPosts(context) {
    //         return axios.get('api/posts').then(
    //             response => {
    //                 context.commit('setPosts', response.data.data)
    //             }
    //         ).catch(error => {
    //
    //         }).finally({})
    //     },
    //     destroyPost(context, id) {
    //         return axios.delete(`api/posts/${id}`).then(
    //             response => {
    //                 context.dispatch('getPosts')
    //                 // this.getPosts()
    //             }
    //         )
    //     },
    //     updatePost(context, data) {
    //         return axios.put(`/api/posts/${data.id}`, {
    //             title: data.title,
    //             description: data.description,
    //         }).then(
    //             response => {
    //                 router.push({name: 'posts.show', params:{
    //                         id: data.id
    //                     }})
    //             }
    //         ).catch(error => {
    //
    //         }).finally({})
    //     },
    //     storePost(context, data) {
    //         return axios.post('/api/posts', {
    //             title: data.title,
    //             description: data.description,
    //         }).then(
    //             response => {
    //                 router.push({name: 'posts.index'})
    //             }
    //         )
    //     }
    // },
};
