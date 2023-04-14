import { defineStore } from 'pinia'
import useToast from './useToast'

export const useCreateBookMarkStore = defineStore('Create-bookmark-store', {
    state: () => ({
        loading: false,
        currentUserId: null,
        Warn:'',
        books: [],
        activity:'None',
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
    getters: {
        /* getBook: (state) => (id) => {
            return state.books.find((book) => book.id === id)
        },
        getLimitedBooks: (state) => {
            return state.limitedBooks
        },
        getBookmarks: (state) => {
            return state.books
        },
        getSingleBook: (state) => {
            return state.singleBook
        }, */
        getActivity: (state) => {
            return state.activity
        }
       /*  getWarn: (state) => {
            return state.Warn
        }, */
    },
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
                this.$state.activity=book.title + " created"
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
           try {
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

            }
           } catch (error) {
            useToast().info("?Have you created any bookmark", toastOptions)
            this.$state.Warn="You have no bookmarks yet"
            this.loading = false
            
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
           try {
            const { data, error } = await client
            .from('bookmarks')
            .delete()
            .eq('user_id', id)
        if (error) {
            this.loading = false
            useToast().error(error.message, toastOptions)
        }
        setTimeout(() => {
            this.loading = false
            useToast().success('Bookmark deleted', toastOptions)
            window.location.reload()
        }, 4000)

           } catch (error) {
            useToast().error("Unexpected. try again.", toastOptions)
            this.loading = false
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
            try {
                const { data, error } = await client

                .from('bookmarks')
                .update({ title: title, url: url, description: description })
                .eq('user_id', id)
            if (error) {
                this.loading = false
                useToast().error(error.message, toastOptions)
            }
           
            setTimeout(() => {
                this.loading = false
                useToast().success('Bookmark updated', toastOptions)
                window.location.reload()
            }, 4000) 

            } catch (error) {
                useToast().error("Unexpected. try again.", toastOptions)
                this.loading = false
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
                this.singleBook.title = data[0]['title']
                this.singleBook.url = data[0]['url']
                this.singleBook.description = data[0]['description']
                 

                this.loading = false
                 
            }
              } catch (error) {
                useToast().error(error.message, toastOptions)
                
              }
        }

    

      
    
                

    }
})
