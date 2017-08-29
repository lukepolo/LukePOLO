export const get = () => {
    Vue.request().get('/api/blogs', 'blogs/setAll')
}

export const store = () => {
    Vue.request().post('/api/blogs', 'blogs/add').then(() => {
        app.showSuccess('You have created a new blog')
        app.$router.push({ name : 'admin-blogs' })
    })
}

export const show = ({}, blog) => {
    Vue.request().get('/api/blogs/' + blog, 'blogs/set')
}

export const update = ({}, form) => {
    Vue.request().put('/api/blogs/' + form.blog, 'blogs/update').then(() => {
        app.showSuccess('You have updated the blog')
        app.$router.push({ name : 'admin-blogs' })
    })
}

export const destroy = ({}, blog) => {
    Vue.request().delete('/api/blogs/' + blog, 'blogs/remove').then(() => {
        app.showSuccess('You have deleted the blog')
        app.$router.push({ name : 'admin-blogs' })
    })
}