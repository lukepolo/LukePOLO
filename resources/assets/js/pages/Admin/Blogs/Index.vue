<template>
    <section>
        <template v-if="blogs.length">
            <h3>Blogs</h3>
            <table class="table table-striped">
                <thead>
                    <th>Name</th>
                    <th>Status</th>
                    <th>Created At</th>
                    <th>Updated At</th>
                    <th>Preview</th>
                    <th></th>
                </thead>
                <tbody>
                <tr v-for="blog in blogs">
                    <td>
                        <router-link :to="{ name : 'admin-blogs-edit', params : { blog : blog.id } }">
                            {{ blog.name }}
                        </router-link>
                    </td>
                    <td>
                        <template v-if="blog.draft">
                            draft
                        </template>
                        <template v-else>
                            published
                        </template>
                    </td>
                    <td>{{ blog.created_at }}</td>
                    <td>{{ blog.updated_at }}</td>
                    <td>
                        <router-link :to="{ name : 'blog', params : { blog : blog.id } }">preview</router-link>
                    </td>
                    <td>
                        <div class="btn-link confirm" @click="deleteBlog(blog)">Delete</div>
                    </td>
                </tr>
                </tbody>
            </table>

            <router-link class="btn btn-primary" :to="{ name : 'admin-blogs-create' }">Create</router-link>

            <pagination :pagination="blogPagination" commit="blogs/setAll"></pagination>
        </template>
        <template v-else>
            <h3 class="text-center">
                Lets create your first <router-link class="text-center" :to="{ name : 'admin-blogs-create' }"> Blog</router-link>!
            </h3>
        </template>
    </section>
</template>

<script>
    export default {
        created() {
            this.$store.dispatch('blogs/get', {
                perPage : 20
            })
        },
        methods : {
            deleteBlog(blog) {
                this.$store.dispatch('blogs/destroy', blog.id)
            }
        },
        computed : {
            blogs() {
                return this.$store.state.blogs.blogs
            },
            blogPagination() {
                return this.$store.state.blogs.pagination
            }
        }
    }
</script>