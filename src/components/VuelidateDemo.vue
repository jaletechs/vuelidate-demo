<template>
  <div class="flex justify-center">
    <div
      class="
        flex-col
        w-3/5
        h-auto
        shadow-md
        rounded-lg
        mt-5
        border border-gray-300
        p-5
        gap-2
      "
    >
      <h1>Please complete form</h1>
      <div class="flex-col text-left">
        <div class="w-full">
          <p class="text-sm font-semibold mt-1">First Name</p>
          <input
            type="text"
            v-model="person.first_name"
            :class="
              v$.person.first_name.$error === true
                ? 'text-fields-error'
                : 'text-fields'
            "
          />
          <p
            class="text-red-500 text-xs font-thin"
            v-for="error of v$.person.first_name.$errors"
            :key="error.$uid"
          >
            {{ error.$message }}
          </p>
        </div>
        <div class="w-full">
          <p class="text-sm font-semibold mt-1">Last Name</p>
          <input
            type="text"
            v-model="person.last_name"
            :class="
              v$.person.last_name.$error === true
                ? 'text-fields-error'
                : 'text-fields'
            "
          />
          <p
            class="text-red-500 text-xs font-thin"
            v-for="error of v$.person.last_name.$errors"
            :key="error.$uid"
          >
            {{ error.$message }}
          </p>
        </div>
        <div class="w-full">
          <p class="text-sm font-semibold mt-1">Other Names</p>
          <input type="text" v-model="person.other_names" class="text-fields" />
        </div>
        <div class="w-full">
          <p class="text-sm font-semibold mt-1">Age</p>
          <input
            type="text"
            v-model="person.age"
            :class="
              v$.person.age.$error === true
                ? 'text-fields-error'
                : 'text-fields'
            "
          />
          <p
            class="text-red-500 text-xs font-thin"
            v-for="error of v$.person.age.$errors"
            :key="error.$uid"
          >
            {{ error.$message }}
          </p>
        </div>
        <div class="w-full">
          <p class="text-sm font-semibold mt-1">Email</p>
          <input
            type="text"
            v-model="person.email"
            :class="
              v$.person.email.$error === true
                ? 'text-fields-error'
                : 'text-fields'
            "
          />
          <p
            class="text-red-500 text-xs font-thin"
            v-for="error of v$.person.email.$errors"
            :key="error.$uid"
          >
            {{ error.$message }}
          </p>
        </div>
        <div class="w-full">
          <p class="text-sm font-semibold mt-1">Website</p>
          <input
            type="text"
            v-model="person.website"
            :class="
              v$.person.website.$error === true
                ? 'text-fields-error'
                : 'text-fields'
            "
          />
          <p
            class="text-red-500 text-xs font-thin"
            v-for="error of v$.person.website.$errors"
            :key="error.$uid"
          >
            {{ error.$message }}
          </p>
        </div>
      </div>
      <div class="flex justify-end">
        <button
          class="
            bg-red-600
            py-1
            px-2
            mr-2
            rounded-lg
            text-md
            shadow-sm
            text-white
            hover:bg-red-700
            active:bg-red-900
            font-normal
          "
          @click="clearFields()"
        >
          Clear Fields
        </button>
        <button
          class="
            bg-blue-600
            py-1
            px-2
            rounded-lg
            text-md
            shadow-sm
            text-white
            hover:bg-blue-700
            active:bg-blue-900
            font-normal
          "
          @click="submit"
        >
          Submit
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import useVuelidate from "@vuelidate/core";
import { required, numeric, email, url, helpers } from "@vuelidate/validators";
export default {
  name: "VuelidateDemo",
  data() {
    return {
      v$: useVuelidate(),
      person: {
        first_name: null,
        last_name: null,
        other_names: null,
        age: 0,
        email: null,
        website: null,
      },
    };
  },

  validations() {
    return {
      person: {
        first_name: {
          required: helpers.withMessage("First name is required", required),
          $autoDirty: true,
        },
        last_name: { required, $autoDirty: true },
        age: { required, numeric, $autoDirty: true },
        email: { required, email, $autoDirty: true },
        website: { required, url, $autoDirty: true },
      },
    };
  },

  methods: {
    clearFields() {
      this.person = {
        first_name: null,
        last_name: null,
        other_names: null,
        age: 0,
        email: null,
        website: null,
      };
    },

    submit() {
      this.v$.$touch();
    },
  },
};
</script>

<style scoped></style>
