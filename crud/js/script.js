$(function() {

    var Message = Backbone.Model.extend({
        url: '/message',

        idAttribute: '_id',

        defaults: {
            name: 'Here comes the name',
            message: 'Messages',
            sentDate: new Date()
        }
    });

    var MessageItemView = Backbone.View.extend({

        tagName: 'div',

        template: _.template($('#messageItemTemplate').html()),

        events: {
            'click .edit': 'editMessage',
            'click .delete': 'deleteMessage'
        },

        editMessage: function () {
            var message = prompt('Enter the new message body', this.model.get('message'));
            if (!message) return;

            this.model.set('message', message);
        },

        deleteMessage: function () {

            this.model.destroy();
        },

        remove: function () {

            this.$el.remove();
        },

        initialize: function () {

            this.model.on('change', this.render, this);
            this.model.on('destroy', this.remove, this);

            this.render();
        },

        render: function () {

            this.$el.html(this.template(this.model.attributes));
        }
    });

    var MessageCollection = Backbone.Collection.extend({

        model: Message,

    });


    var NewMessageView = Backbone.View.extend({

        el: '#newMessage',

        events: {
            'submit': 'newMessage'
        },

        newMessage: function (event) {
            // Prevent submiting the page
            event.preventDefault();

            var message = new Message({
                'name': this.$el.find('.name').val(),
                'message': this.$el.find('.message').val()
            });

            this.collection.add(message);
        }

    });

    var InpuBoxView = Backbone.View.extend({

        tagName: 'div',

        initialize: function () {
            // Render on init, no point actually
            // this.render();

            this.collection.on('add', this.addOne, this);
        },

        addOne: function (message) {
            // One message is added
            var messageView = new MessageItemView({ model: message });

            console.log(messageView);
            this.$el.append(messageView.el);
        },

        render: function () {

            this.collection.each(this.addOne, this);

            // Return this for chaining commands
            return this;
        }
    });

    var AppRouter = Backbone.Router.extend({

        routes: {
            '': 'index',
            'view/:id': 'view',
            'edit': 'edit',
            'tweet': 'showTweet',
            '*default': 'index'
        },

        showTweet: function () {

            console.log('Showing tweets');

            var customerCol = new CustomerCollection();

            customerCol.fetch();
            new CustomerView({ collection: customerCol });

            console.log(customerCol);
        },

        view: function (id) {

            console.log('Viewin item ', id);
            var m1 = new Message();
            m1.save();
            // m1.sync(function (method, model) {
            //     console.log('Synced', method, model);
            // });
        },

        edit: function () {
            console.log('Edit route added');
        },

        index: function () {
            console.log('Index route added');
            var messages = new MessageCollection([
                { name: 'This is first message', message: 'The body of the message' },
                { name: 'The second message', message: 'Body of the message' }
            ]);

            new NewMessageView({ collection: messages });

            var inputBox = new InpuBoxView({ collection: messages });
            // inputBox.render();

            $('#page').html(inputBox.render().el);

        }
    });

    new AppRouter();
    Backbone.history.start();


});