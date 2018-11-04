<template>
  <v-data-table
    :headers="headers"
    :items="books"
    hide-actions
    class="elevation-1"
  >
    <template slot="items" slot-scope="props">
      <td class="text-xs-left"> {{ props.item.Title }}</td>
      <td class="text-xs-left">{{ props.item.Author }}</td>
      <td class="text-xs-left">{{ props.item.Description }}</td>
      <td class="text-xs-left">{{ props.item.PageCount }}</td>
    </template>
  </v-data-table>
</template>

<script>
export default {
  data() {
    return {
      headers:[
          {
              text: 'Title',
              value: 'Title'
          },
          {
              text: 'Author',
              value: 'Author'
          },
          {
              text: 'Descirption',
              value: 'Description'
          },
          {
              text: 'page count',
              value: 'PageCount'
          }
      ],
      books:
      [
          {
              Title:"The Laws of human nature",
              Author:"Robert Greene", 
              Description:"Making you an aprentice in human nature",
              PageCount:550
          },
       {
           Title:"33 Strategies of War",
           Author:"Robert Greene",
           Description:"Making you a Napoleon",
           PageCount:300 
       }   
      ]
    };
  },
};
</script>
