import { defineStore } from 'pinia'
import useToast from './useToast'

export const useCreateBookMarkStore = defineStore('Create-bookmark-store', {
    state: () => ({
        loading: false,
        currentUserId: null,
        Warn:'',
        books: [],
        activity:'',
        singleBook: 
         {
            title: '',
            url: '',
            description: '',
         }
        ,
        limitedBooks: [],
        book: {
            title: '',
            url: '',
            description: '',
        },

        
    }),
    actions: {
       //create a new bookmark in regards to current logged in user
        async create(book, options = {}) {
            const client = useSupabaseAuthClient()
            const LoggedUser = useSupabaseUser()
            this.currentUserId = LoggedUser.value.id
            const toastOptions = {
                position: 'top-center',
                timeout: 5000,
                closeOnClick: true,
                pauseOnFocusLoss: true,
                pauseOnHover: true,
                draggable: true,
                draggablePercent: 0.6,
                showCloseButtonOnHover: true,
                hideProgressBar: true,
                closeButton: 'button',
                icon: 'MyIconComponent',
                rtl: true,

            }
            this.loading = true
            const { data, error } = await client
                .from('bookmarks')
                .insert([
                    {
                        user:this.currentUserId,
                        title: book.title,
                        url: book.url,
                        description: book.description,
                        
                    },
                ])
            if (error) {
                this.loading = false
                useToast().error(error.message, toastOptions)
            }else{
                useToast().success('Bookmark created successfully', toastOptions)
                this.$state.activity="Bookmark created successfully"
                setTimeout(() => {
                    this.loading = false
                }, 4000)
                location.reload()
                navigateTo('/Bookmarks')
            }
        },
        // retrieve bookmarks in regard to current logged in user
        async getBookmarks() {
            const toastOptions = {
                position: 'top-center',
                timeout: 5000,
                closeOnClick: true,
                pauseOnFocusLoss: true,
                pauseOnHover: true,
                draggable: true,
                draggablePercent: 0.6,
                showCloseButtonOnHover: true,
                hideProgressBar: true,
                closeButton: 'button',
                icon: 'MyIconComponent',
                rtl: true,

            }
            const user=useSupabaseUser()
           try {
            this.loading = true
            const client = useSupabaseAuthClient()
            if(user.value.id==null){
                useToast().error('You have no bookmarks yet', toastOptions)
                this.loading = false
            }

           else{
            const { data, error } = await client
            .from('bookmarks')
            .select('*')
            .eq('user', user.value.id)
            /* null do something */
           
        if (error) {
            this.loading = false
            useToast().error(error.message, toastOptions)
        }
        if (data) {
            this.books = data
            this.loading = false
            console.log(this.books);

        }
           }
           } catch (error) {
            useToast().info("?Have you created any bookmark", toastOptions)
            this.$state.Warn="You have no bookmarks yet"
            this.loading = false
           }
        },
        /* fetch only six bookmarks */
        async getSixBookmarks() {
            const toastOptions = {
                position: 'top-center',
                timeout: 5000,
                closeOnClick: true,
                pauseOnFocusLoss: true,
                pauseOnHover: true,
                draggable: true,
                draggablePercent: 0.6,
                showCloseButtonOnHover: true,
                hideProgressBar: true,
                closeButton: 'button',
                icon: 'MyIconComponent',
                rtl: true,

            }
            const user=useSupabaseUser()
            this.loading = true
            const client = useSupabaseAuthClient()
            const { data, error } = await client

                .from('bookmarks')
                .select('*')
                .eq('user', user.value.id)
                .limit(6)
            if (error) {
                this.loading = false
                useToast().error(error.message, toastOptions)

            }
            if (data) {
                this.limitedBooks = data
                this.loading = false
                console.log(this.limitedBooks);

            }
        },
        // delete a bookmark
        async delete(id) {
            const toastOptions = {
                position: 'top-center',
                timeout: 5000,
                closeOnClick: true,
                pauseOnFocusLoss: true,
                pauseOnHover: true,
                draggable: true,
                draggablePercent: 0.6,
                showCloseButtonOnHover: true,
                hideProgressBar: true,
                closeButton: 'button',
                icon: 'MyIconComponent',
                rtl: true,
            }
            this.loading = true
            const client = useSupabaseAuthClient()
            const { data, error } = await client
                .from('bookmarks')
                .delete()
                .eq('id', id)
            if (error) {
                this.loading = false
                useToast().error(error.message, toastOptions)
            }
            if (data) {
                this.loading = false
                useToast().success('Bookmark deleted successfully', toastOptions)
                setTimeout(() => {
                    location.reload()
                }

                , 4000)
            }
        },
        // update a bookmark
        async update(id, title, url, description) {
            const toastOptions = {
                position: 'top-center',
                timeout: 5000,
                closeOnClick: true,
                pauseOnFocusLoss: true,
                pauseOnHover: true,
                draggable: true,
                draggablePercent: 0.6,
                showCloseButtonOnHover: true,
                hideProgressBar: true,
                closeButton: 'button',
                icon: 'MyIconComponent',
                rtl: true,
            }
            this.loading = true
            const client = useSupabaseAuthClient()
            const { data, error } = await client

                .from('bookmarks')
                .update({ title: title, url: url, description: description })
                .eq('id', id)
            if (error) {
                this.loading = false
                useToast().error(error.message, toastOptions)
            }
            if (data) {
                this.loading = false
                useToast().success('Bookmark updated successfully', toastOptions)
                setTimeout(() => {
                    location.reload()
                }

                , 4000)

            }
        },
        //get a bookmark by id
        async getBookmarkById(id) {
            const toastOptions = {
                position: 'top-center',
                timeout: 5000,
                closeOnClick: true,
                pauseOnFocusLoss: true,
                pauseOnHover: true,
                draggable: true,
                draggablePercent: 0.6,
                showCloseButtonOnHover: true,
                hideProgressBar: true,
                closeButton: 'button',
                icon: 'MyIconComponent',
                rtl: true,
            }
            this.loading = true
            const client = useSupabaseAuthClient()
              try {
                const { data, error } = await client
                .from('bookmarks')
                .select('*')
                .eq('user_id', id)
            if (error) {
                this.loading = false
                useToast().error(error.message, toastOptions)
            }
            if (data) {
                this.singleBook = data[0]
                this.loading = false
                console.log(data[0]);
                 
            }
              } catch (error) {
                useToast().error(error.message, toastOptions)
                
              }
        }

    

      
    
                

    }
})
