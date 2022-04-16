<script setup>
import { ref , computed} from 'vue'

defineEmits(['createNote','updateNote'])
const props = defineProps({
    currentNotes:{
        type:Object,
        default:{}
    }
})
console.log(props.currentNotes);

// const newNote = ref('')
const newNote = computed(() => {
    return {id : props.currentNotes.id , noteDetail:props.currentNotes.noteDetail}
})

</script>
<template>
  <div>
    Note Detail <input type="text" v-model="newNote.noteDetail" />
    <button v-if="newNote.id > 0" @click="$emit('updateNote', newNote)">Update</button>
    <button @click="$emit('createNote', newNote.noteDetail)">Create</button>
  </div>
</template>
<style></style>