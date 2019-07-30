import { S as SvelteComponentDev, i as init, s as safe_not_equal, e as element, t as text, a as space, c as claim_element, b as children, d as claim_text, f as detach, g as attr, h as add_location, D as listen, j as insert, k as append, n as noop, E as run_all, m as mount_component, q as transition_in, r as transition_out, u as destroy_component } from './chunk.e85236fc.js';

/* src/components/SignUp.svelte generated by Svelte v3.6.9 */

const file = "src/components/SignUp.svelte";

function create_fragment(ctx) {
	var form, div0, label0, t0, t1, input0, t2, div1, label1, t3, t4, input1, t5, div2, label2, t6, t7, input2, t8, div3, button, t9, t10, p, t11, a, t12, dispose;

	return {
		c: function create() {
			form = element("form");
			div0 = element("div");
			label0 = element("label");
			t0 = text("User name:");
			t1 = space();
			input0 = element("input");
			t2 = space();
			div1 = element("div");
			label1 = element("label");
			t3 = text("Email:");
			t4 = space();
			input1 = element("input");
			t5 = space();
			div2 = element("div");
			label2 = element("label");
			t6 = text("Password:");
			t7 = space();
			input2 = element("input");
			t8 = space();
			div3 = element("div");
			button = element("button");
			t9 = text("Login");
			t10 = space();
			p = element("p");
			t11 = text("dont have an account yet? Sign up\n  ");
			a = element("a");
			t12 = text("here");
			this.h();
		},

		l: function claim(nodes) {
			form = claim_element(nodes, "FORM", { onsubmit: true, class: true }, false);
			var form_nodes = children(form);

			div0 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div0_nodes = children(div0);

			label0 = claim_element(div0_nodes, "LABEL", { for: true, class: true }, false);
			var label0_nodes = children(label0);

			t0 = claim_text(label0_nodes, "User name:");
			label0_nodes.forEach(detach);
			t1 = claim_text(div0_nodes, "\n    ");

			input0 = claim_element(div0_nodes, "INPUT", { type: true, name: true }, false);
			var input0_nodes = children(input0);

			input0_nodes.forEach(detach);
			div0_nodes.forEach(detach);
			t2 = claim_text(form_nodes, "\n  ");

			div1 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div1_nodes = children(div1);

			label1 = claim_element(div1_nodes, "LABEL", { for: true, class: true }, false);
			var label1_nodes = children(label1);

			t3 = claim_text(label1_nodes, "Email:");
			label1_nodes.forEach(detach);
			t4 = claim_text(div1_nodes, "\n    ");

			input1 = claim_element(div1_nodes, "INPUT", { type: true, name: true }, false);
			var input1_nodes = children(input1);

			input1_nodes.forEach(detach);
			div1_nodes.forEach(detach);
			t5 = claim_text(form_nodes, "\n  ");

			div2 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div2_nodes = children(div2);

			label2 = claim_element(div2_nodes, "LABEL", { for: true, class: true }, false);
			var label2_nodes = children(label2);

			t6 = claim_text(label2_nodes, "Password:");
			label2_nodes.forEach(detach);
			t7 = claim_text(div2_nodes, "\n    ");

			input2 = claim_element(div2_nodes, "INPUT", { type: true, name: true }, false);
			var input2_nodes = children(input2);

			input2_nodes.forEach(detach);
			div2_nodes.forEach(detach);
			t8 = claim_text(form_nodes, "\n  ");

			div3 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div3_nodes = children(div3);

			button = claim_element(div3_nodes, "BUTTON", { type: true }, false);
			var button_nodes = children(button);

			t9 = claim_text(button_nodes, "Login");
			button_nodes.forEach(detach);
			div3_nodes.forEach(detach);
			form_nodes.forEach(detach);
			t10 = claim_text(nodes, "\n\n");

			p = claim_element(nodes, "P", { class: true }, false);
			var p_nodes = children(p);

			t11 = claim_text(p_nodes, "dont have an account yet? Sign up\n  ");

			a = claim_element(p_nodes, "A", { href: true }, false);
			var a_nodes = children(a);

			t12 = claim_text(a_nodes, "here");
			a_nodes.forEach(detach);
			p_nodes.forEach(detach);
			this.h();
		},

		h: function hydrate() {
			attr(label0, "for", "userName");
			attr(label0, "class", "svelte-11460e");
			add_location(label0, file, 38, 4, 587);
			attr(input0, "type", "text");
			attr(input0, "name", "userName");
			add_location(input0, file, 39, 4, 632);
			attr(div0, "class", "svelte-11460e");
			add_location(div0, file, 37, 2, 577);
			attr(label1, "for", "email");
			attr(label1, "class", "svelte-11460e");
			add_location(label1, file, 42, 4, 713);
			attr(input1, "type", "text");
			attr(input1, "name", "email");
			add_location(input1, file, 43, 4, 751);
			attr(div1, "class", "svelte-11460e");
			add_location(div1, file, 41, 2, 703);
			attr(label2, "for", "password");
			attr(label2, "class", "svelte-11460e");
			add_location(label2, file, 46, 4, 826);
			attr(input2, "type", "password");
			attr(input2, "name", "password");
			add_location(input2, file, 47, 4, 870);
			attr(div2, "class", "svelte-11460e");
			add_location(div2, file, 45, 2, 816);
			attr(button, "type", "submit");
			add_location(button, file, 50, 4, 955);
			attr(div3, "class", "svelte-11460e");
			add_location(div3, file, 49, 2, 945);
			attr(form, "onsubmit", handleSubmit);
			attr(form, "class", "svelte-11460e");
			add_location(form, file, 36, 0, 544);
			attr(a, "href", "login");
			add_location(a, file, 56, 2, 1052);
			attr(p, "class", "svelte-11460e");
			add_location(p, file, 54, 0, 1010);

			dispose = [
				listen(input0, "input", ctx.input0_input_handler),
				listen(input1, "input", ctx.input1_input_handler),
				listen(input2, "input", ctx.input2_input_handler)
			];
		},

		m: function mount(target, anchor) {
			insert(target, form, anchor);
			append(form, div0);
			append(div0, label0);
			append(label0, t0);
			append(div0, t1);
			append(div0, input0);

			input0.value = ctx.userName;

			append(form, t2);
			append(form, div1);
			append(div1, label1);
			append(label1, t3);
			append(div1, t4);
			append(div1, input1);

			input1.value = ctx.email;

			append(form, t5);
			append(form, div2);
			append(div2, label2);
			append(label2, t6);
			append(div2, t7);
			append(div2, input2);

			input2.value = ctx.password;

			append(form, t8);
			append(form, div3);
			append(div3, button);
			append(button, t9);
			insert(target, t10, anchor);
			insert(target, p, anchor);
			append(p, t11);
			append(p, a);
			append(a, t12);
		},

		p: function update(changed, ctx) {
			if (changed.userName && (input0.value !== ctx.userName)) input0.value = ctx.userName;
			if (changed.email && (input1.value !== ctx.email)) input1.value = ctx.email;
			if (changed.password && (input2.value !== ctx.password)) input2.value = ctx.password;
		},

		i: noop,
		o: noop,

		d: function destroy(detaching) {
			if (detaching) {
				detach(form);
				detach(t10);
				detach(p);
			}

			run_all(dispose);
		}
	};
}

function handleSubmit(e) {
  e.preventDefault();
  // firebase auth function
}

function instance($$self, $$props, $$invalidate) {
	let userName = "";
  let password = "";
  let email = "";

	function input0_input_handler() {
		userName = this.value;
		$$invalidate('userName', userName);
	}

	function input1_input_handler() {
		email = this.value;
		$$invalidate('email', email);
	}

	function input2_input_handler() {
		password = this.value;
		$$invalidate('password', password);
	}

	return {
		userName,
		password,
		email,
		input0_input_handler,
		input1_input_handler,
		input2_input_handler
	};
}

class SignUp extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, []);
	}
}

/* src/routes/signUp.svelte generated by Svelte v3.6.9 */

const file$1 = "src/routes/signUp.svelte";

function create_fragment$1(ctx) {
	var t0, h1, t1, t2, current;

	var signup = new SignUp({ $$inline: true });

	return {
		c: function create() {
			t0 = space();
			h1 = element("h1");
			t1 = text("Create an account");
			t2 = space();
			signup.$$.fragment.c();
			this.h();
		},

		l: function claim(nodes) {
			t0 = claim_text(nodes, "\n\n");

			h1 = claim_element(nodes, "H1", { class: true }, false);
			var h1_nodes = children(h1);

			t1 = claim_text(h1_nodes, "Create an account");
			h1_nodes.forEach(detach);
			t2 = claim_text(nodes, "\n\n");
			signup.$$.fragment.l(nodes);
			this.h();
		},

		h: function hydrate() {
			document.title = "sign up";
			attr(h1, "class", "svelte-1wdv9cp");
			add_location(h1, file$1, 14, 0, 180);
		},

		m: function mount(target, anchor) {
			insert(target, t0, anchor);
			insert(target, h1, anchor);
			append(h1, t1);
			insert(target, t2, anchor);
			mount_component(signup, target, anchor);
			current = true;
		},

		p: noop,

		i: function intro(local) {
			if (current) return;
			transition_in(signup.$$.fragment, local);

			current = true;
		},

		o: function outro(local) {
			transition_out(signup.$$.fragment, local);
			current = false;
		},

		d: function destroy(detaching) {
			if (detaching) {
				detach(t0);
				detach(h1);
				detach(t2);
			}

			destroy_component(signup, detaching);
		}
	};
}

class SignUp_1 extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, null, create_fragment$1, safe_not_equal, []);
	}
}

export default SignUp_1;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lnblVwLjBmMTQ3MTFhLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9TaWduVXAuc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQ+XG4gIGxldCB1c2VyTmFtZSA9IFwiXCI7XG4gIGxldCBwYXNzd29yZCA9IFwiXCI7XG4gIGxldCBlbWFpbCA9IFwiXCI7XG5cbiAgZnVuY3Rpb24gaGFuZGxlU3VibWl0KGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgLy8gZmlyZWJhc2UgYXV0aCBmdW5jdGlvblxuICB9XG48L3NjcmlwdD5cblxuPHN0eWxlPlxuICBmb3JtIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAgaGVpZ2h0OiA1MHZoO1xuICAgIHdpZHRoOiA1MHZ3O1xuICAgIGJvcmRlcjogdGhpbiBzb2xpZCBncmV5O1xuICAgIG1hcmdpbjogYXV0bztcbiAgfVxuICBwIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgbGFiZWwge1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gIH1cbiAgZGl2IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW46IDFlbTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB9XG4gIGRpdiBsYWJlbCB7bWFyZ2luLXJpZ2h0OiAxZW19XG48L3N0eWxlPlxuXG48Zm9ybSBvbnN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgPGRpdj5cbiAgICA8bGFiZWwgZm9yPVwidXNlck5hbWVcIj5Vc2VyIG5hbWU6PC9sYWJlbD5cbiAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwidXNlck5hbWVcIiBiaW5kOnZhbHVlPXt1c2VyTmFtZX0gLz5cbiAgPC9kaXY+XG4gIDxkaXY+XG4gICAgPGxhYmVsIGZvcj1cImVtYWlsXCI+RW1haWw6PC9sYWJlbD5cbiAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiZW1haWxcIiBiaW5kOnZhbHVlPXtlbWFpbH0gLz5cbiAgPC9kaXY+XG4gIDxkaXY+XG4gICAgPGxhYmVsIGZvcj1cInBhc3N3b3JkXCI+UGFzc3dvcmQ6PC9sYWJlbD5cbiAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgbmFtZT1cInBhc3N3b3JkXCIgYmluZDp2YWx1ZT17cGFzc3dvcmR9IC8+XG4gIDwvZGl2PlxuICA8ZGl2PlxuICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPkxvZ2luPC9idXR0b24+XG4gIDwvZGl2PlxuPC9mb3JtPlxuXG48cD5cbiAgZG9udCBoYXZlIGFuIGFjY291bnQgeWV0PyBTaWduIHVwXG4gIDxhIGhyZWY9XCJsb2dpblwiPmhlcmU8L2E+XG48L3A+XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFvQ2dCLFlBQVk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3NCQUd1QixRQUFROzs7Ozs7Ozs7c0JBSVgsS0FBSzs7Ozs7Ozs7O3NCQUlFLFFBQVE7Ozs7Ozs7Ozs7Ozs7O2lEQVJaLFFBQVEsc0JBQVIsUUFBUTs4Q0FJWCxLQUFLLHNCQUFMLEtBQUs7aURBSUUsUUFBUSxzQkFBUixRQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUExQzdELFNBQVMsWUFBWSxDQUFDLENBQUMsRUFBRTtFQUN2QixDQUFDLENBQUMsY0FBYyxFQUFFLENBQUM7O0NBRXBCOzs7Q0FQRCxJQUFJLFFBQVEsR0FBRyxFQUFFLENBQUM7RUFDbEIsSUFBSSxRQUFRLEdBQUcsRUFBRSxDQUFDO0VBQ2xCLElBQUksS0FBSyxHQUFHLEVBQUUsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
