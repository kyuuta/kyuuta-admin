export default {
    state: {
        visitedViews: []
    },
    mutations: {
        ADD_VISITED_VIEW: (state, view) => {
            state.visitedViews.push(
                Object.assign({}, view, {
                    title: view.meta.title || 'no-name'
                })
            )
        },
        DELETE_VISITED_VIEW: (state, view) => {
            for (const [i, v] of state.visitedViews.entries()) {
                if (v.name === view) {
                    state.visitedViews.splice(i, 1)
                    break
                }
            }
        }
    },
    actions: {
        AddView({ commit, state }, view) {
            return new Promise(resolve => {
                if (state.visitedViews.some(item => item.path === view.path)) {
                    return resolve(true)
                } else {
                    commit('ADD_VISITED_VIEW', view)
                    return resolve(false)
                }
            })
        },
        DeleteView({ commit, state }, view) {
            return new Promise(resolve => {
                commit('DELETE_VISITED_VIEW', view)
                resolve([...state.visitedViews])
            })
        }
    }
}
