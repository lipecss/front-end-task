export default function ({ store, redirect }) {
  if (!store.state.loggedIn) {
    return redirect('/login')
  } else if (store.state.loggedIn) {
    return redirect('/')
  }
}
