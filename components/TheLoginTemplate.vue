<template>
  <b-container fluid class="template-login">
    <b-row class="row page-login___row">
      <b-col
        xs="12"
        xm="10"
        offset-sm="1"
        md="10"
        offset-md="1"
        lg="8"
        offset-lg="2"
      >
        <div class="template-login__right--content">
          <slot name="content" />
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>
