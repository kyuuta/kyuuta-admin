export default {
    state: {
        visitedViews: []
    },
    mutations: {
        ADD_VISITED_VIEW: (state, view) => {
            if (state.visitedViews.some(item => item.path === view.path)) return

            state.visitedViews.push(
                Object.assign({}, view, {
                    title: view.meta.title || 'no-name'
                })
            )

            console.log(state.visitedViews)
        }
    },
    actions: {
        AddView({ commit }, view) {
            commit('ADD_VISITED_VIEW', view)
        }
    }
}
