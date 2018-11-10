import { mapState, mapActions } from "vuex"

// In renderer process to call actions you need to use `dispatch` or `mapActions`
// Don't use `commit` because actions fired via `commit` will not be shared between processes

export default {
  computed: mapState(["count"]),
  methods: mapActions(["increment", "decrement"])
}
