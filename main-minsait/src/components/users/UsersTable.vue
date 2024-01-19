<template>
  <div class="users">
    <header class="one-pl-4 one-pr-4">
      <div class="one-flex one-justify-between">
        <h1 class="one-txt-title-200">
          {{ "MICROFRONT:Host" }}
        </h1>
        <one-button
          type="primary"
          icon-position="left"
          @click="goToEditView()"
          :is-disabled="loading"
          icon="plus"
        >
          {{ "Añadir" }}</one-button
        >
      </div>
    </header>
    <ViewParser fullheight customWidth="100%">
      <one-table stripe="false" @sort="ordenation" :data="mockData">
        <div
          slot="actions-toolbar"
          style="display: flex; gap: 4px; flex-wrap: wrap; align-items: center"
        ></div>
        <one-table-column :customCellTemplate="renderSecondTable" type="expand">
        </one-table-column>
        <!-- <one-table-column type='selection'></one-table-column> -->
        <one-table-column
          :name="t('users.name')"
          sortable
          fixed="left"
          prop="nombreCompleto"
        ></one-table-column>
        <one-table-column
          :name="t('users.id')"
          sortable
          prop="identificador"
        ></one-table-column>
        <one-table-column
          :name="t('users.mail')"
          sortable
          prop="email"
        ></one-table-column>

        <one-table-column
          v-if="props.type === 'service'"
          :name="t('users.dayWorkPercentage')"
          prop="jornada"
        ></one-table-column>
        <one-table-column
          :name="t('users.assignment')"
          prop="servicios"
          :customCellTemplate="renderAssignementColumn"
        ></one-table-column>

        <one-table-column
          v-if="props.type === 'service'"
          :customCellTemplate="renderWorkcalendarColumn"
          :name="t('users.workCalendar')"
          sortable
          prop="identificadorCalendario"
        ></one-table-column>

        <one-table-column
          width="50"
          fixed="right"
          align="center"
          :customCellTemplate="renderColumn"
        ></one-table-column>
      </one-table>
      <one-pagination
        :current-page="currentPage"
        :page-size="10"
        :page-sizes="[10]"
        :total="totalItems"
        @currentChange="handleCurrentChange"
        :layout="['total', 'sizes', 'pager', '->', 'prev', 'next']"
      />
    </ViewParser>

    <!-- </one-loading> -->
  </div>

  <router-view></router-view>
</template>
<script setup>
import ViewParser from "@/components/shared/ViewParser.vue";
import { useI18n } from "vue-i18n";
import { notify } from "@one/webapp-ui/dist/components/";
import { ref, onMounted, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useGlobalStore } from "@/store/apidata";
import CustomLoading from "@/components/shared/CustomLoading.vue";

const props = defineProps({
  type: {
    type: String,
  },
  data: {
    type: Array,
  },
});
const loading = ref(false);
const apidata = useGlobalStore();
const modalDeleteActive = ref(false);
const modalUserActive = ref(false);
const modalServiceActive = ref(false);
const { t } = useI18n();
const tags = ref([]);
const tableData = ref([]);
const mockData = [
  {
    nombreCompleto: "Usuario 1",
    identificador: 1,
    email: "usuario1@example.com",
    jornada: 8,
    servicios: "Servicio 1",
    identificadorCalendario: "Calendario 1",
  },
  {
    nombreCompleto: "Usuario 2",
    identificador: 2,
    email: "usuario2@example.com",
    jornada: 6,
    servicios: "Servicio 2",
    identificadorCalendario: "Calendario 2",
  },
  {
    nombreCompleto: "Usuario 3",
    identificador: 3,
    email: "usuario3@example.com",
    jornada: 7,
    servicios: "Servicio 3",
    identificadorCalendario: "Calendario 3",
  },
  {
    nombreCompleto: "Usuario 4",
    identificador: 4,
    email: "usuario4@example.com",
    jornada: 8,
    servicios: "Servicio 4",
    identificadorCalendario: "Calendario 4",
  },
  {
    nombreCompleto: "Usuario 5",
    identificador: 5,
    email: "usuario5@example.com",
    jornada: 6,
    servicios: "Servicio 5",
    identificadorCalendario: "Calendario 5",
  },
  {
    nombreCompleto: "Usuario 6",
    identificador: 6,
    email: "usuario6@example.com",
    jornada: 7,
    servicios: "Servicio 6",
    identificadorCalendario: "Calendario 6",
  },
  {
    nombreCompleto: "Usuario 7",
    identificador: 7,
    email: "usuario7@example.com",
    jornada: 8,
    servicios: "Servicio 7",
    identificadorCalendario: "Calendario 7",
  },
  {
    nombreCompleto: "Usuario 8",
    identificador: 8,
    email: "usuario8@example.com",
    jornada: 6,
    servicios: "Servicio 8",
    identificadorCalendario: "Calendario 8",
  },
  {
    nombreCompleto: "Usuario 9",
    identificador: 9,
    email: "usuario9@example.com",
    jornada: 7,
    servicios: "Servicio 9",
    identificadorCalendario: "Calendario 9",
  },
  {
    nombreCompleto: "Usuario 10",
    identificador: 10,
    email: "usuario10@example.com",
    jornada: 8,
    servicios: "Servicio 10",
    identificadorCalendario: "Calendario 10",
  },
];
const totalItems = ref(null);
const currentPage = ref(1);
const pageSize = ref(10);
const searchText = ref("");
const route = useRoute();
const userType = ref("");
const activeName = ref("");
const activeData = ref({});
const router = useRouter();
const sortWord = ref("");
const sortDirection = ref("");

const handleCurrentChange = ({ detail }) => {
  currentPage.value = detail;
  getInfo();
};

const closeModal = async (info) => {
  modalDeleteActive.value = false;
  modalUserActive.value = false;
  modalServiceActive.value = false;
};

const goToEditView = (info) => {
  const params = {
    id: info?.row?.identificador || null,
    type: props.type,
  };
  router.push({ name: "users-add-user", params: params });
};

const deleteUser = async (id) => {
  try {
    loading.value = true;

    const deleted = await userServices.deleteUser(
      apidata,
      activeData.value.identificador
    );
    modalDeleteActive.value = false;

    notify({
      title: t("users.deleteUserSuccess"),
      type: "success",
    });
    await getInfo();
    return true;
  } catch (err) {
    console.log(err);
    notify({
      title: t("users.deleteUserFail"),
      type: "error",
    });
    loading.value = false;
  }
};

const handleDelete = (data) => {
  activeName.value = data.row.name;
  activeData.value = data.row;
  modalDeleteActive.value = true;
};

const ordenation = (h, data) => {
  const { column, direction } = h.detail;

  if (column.prop) {
    const orderProperty = column.prop;
    const orderDirection = direction === "asc" ? "asc" : "desc";

    sortWord.value = orderProperty;
    sortDirection.value = orderDirection;

    getInfo(orderProperty, orderDirection);
  }
};

const ordenationAndFilter = (
  data,
  orderProperty,
  orderDirection,
  searchText
) => {
  let filteredData = null;

  if (orderProperty === undefined) {
    orderProperty = sortWord.value;
  }

  if (orderDirection === undefined || orderDirection === sortDirection.value) {
    orderDirection = sortDirection.value;
  } else {
    orderDirection = "asc";
  }

  if (orderProperty) {
    filteredData = data.filter((item) => {
      return (
        item[orderProperty] &&
        item[orderProperty].toLowerCase().includes(searchText.toLowerCase())
      );
    });

    filteredData.sort((a, b) => {
      const propA = a[orderProperty]
        ? a[orderProperty].toString().toLowerCase()
        : "";
      const propB = b[orderProperty]
        ? b[orderProperty].toString().toLowerCase()
        : "";

      return orderDirection === "asc"
        ? propA.localeCompare(propB)
        : propB.localeCompare(propA);
    });
  } else {
    filteredData = data.filter((item) => {
      return item.nombreCompleto
        .toLowerCase()
        .includes(searchText.toLowerCase());
    });
  }

  return filteredData;
};

const openWorkUserModal = (data) => {
  activeData.value = data.row;
  modalUserActive.value = true;
};
const openAssignementModal = (data) => {
  const tagsArr = [];
  data.row.servicios.forEach((el) => tagsArr.push({ name: el }));
  tags.value = tagsArr;

  modalServiceActive.value = true;
};

const renderAssignementColumn = (h, data) => {
  return h("div", { class: "one-flex one-justify-center one-items-center" }, [
    h("one-link", {
      text: data.row.servicios?.length ? t("breadcrumb.services") : "-",
      onClick: () => openAssignementModal(data),
    }),
  ]);
};
const renderWorkcalendarColumn = (h, data) => {
  return h("div", { class: "one-flex one-justify-center one-items-center" }, [
    h("one-link", {
      text: data.row.identificadorCalendario,
      onClick: () => openWorkUserModal(data),
    }),
  ]);
};
const renderColumn = (h, data) => {
  return h("div", { class: "one-flex one-justify-center one-items-center" }, [
    // props.type == "service" &&
    h("one-button", {
      icon: "edit",
      size: "small",
      type: "neutral",

      onClick: () => goToEditView(data),
    }),

    h("one-icon", {
      name: "delete",
      size: "small",
      class: "is-delete",

      onClick: () => handleDelete(data),
    }),
  ]);
};

const renderSecondTable = (h, data) => {
  return h(
    "one-table",
    { stripe: "false", data: data, class: "total-width one-m-2" },
    [
      h("one-table-column", {
        name: t("users.service"),
        prop: "service",
      }),

      props.type == "service" &&
        h("one-table-column", {
          name: t("users.assignment"),
          prop: "assignment",
        }),

      h("one-table-column", { width: "50", align: "right" }, [
        h("one-button", {
          icon: "arrow-right",
          size: "small",
          type: "neutral",
          onClick: () => handleDelete(data),
        }),
      ]),
    ]
  );
};
const renderStatusPercentage = (h, data) => {
  return h("one-button", {
    icon: "edit",
    size: "small",
    type: "neutral",

    onClick: () => goToEditView(data),
  });
};
</script>
<style lang="scss">
.one-table__header-cell {
  background-color: var(--color-bg-secondary);
}
.is-delete {
  cursor: pointer;
  padding: $space-100;
  color: var(--color-bg-destructive) !important;
}
.total-width {
  width: 100%;
}
</style>
