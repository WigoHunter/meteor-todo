import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

export const Todos = new Mongo.Collection('todos');

if (Meteor.isServer) {
  Meteor.publish('todos', function todoPublish() {
    return Todos.find({ owner: this.userId });
  });
}

Meteor.methods({
  'todo.insert'(text) {
    if(!this.userId) {
      throw new Meteor.Error('NOT AUTHORIZED');
    }
    
    Todos.insert({
      text,
      createdAt: new Date(),
      done: false,
      owner: Meteor.userId(),
    });
  },

  'todo.remove'(id) {
    Todos.remove(id);
  },

  'todo.update'(id, status){
    Todos.update(id, {
      $set: {done: !status}
    });
  },
});
