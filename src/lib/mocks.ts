import { Preview, Project, TitleExpress } from "@/types";

export const previewData: Preview = {
  data: "/content/drive/MyDrive/Preview_Test/data(LGG_TCGA_[expression_data]).csv",
  clinical:
    "/content/drive/MyDrive/Preview_Test/clinical(LGG_TCGA_[expression_data]).csv",
  plots: {
    highly_expressed: {
      genes: [
        "MT-ATP8",
        "MT-CO1",
        "MT-CO2",
        "MT-ATP6",
        "MT-CO3",
        "MT-ND4",
        "MT-ND3",
        "MT-RNR2",
        "CLU",
        "MT-ND4L",
      ],
      plot: "/content/drive/MyDrive/Preview_Test/high_expression_box_(LGG_TCGA_[expression_data]).png",
    },
    lowly_expressed: {
      genes: [
        "Metazoa_SRP",
        "SCARNA15",
        "GHRLOS",
        "SPRY3",
        "CD99P1",
        "IL3RA",
        "ASMTL-AS1",
        "AC008079.10",
        "PLCXD1",
        "RP11-305L7.7",
      ],
      plot: "/content/drive/MyDrive/Preview_Test/low_expression_box_(LGG_TCGA_[expression_data]).png",
    },
    heatmap:
      "/content/drive/MyDrive/Preview_Test/heatmap_(LGG_TCGA_[expression_data]).png",
  },
  categorical_table:
    "/content/drive/MyDrive/Preview_Test/categorical_table1(LGG_TCGA_[expression_data]).json",
  numerical_table:
    "/content/drive/MyDrive/Preview_Test/numerical_table2(LGG_TCGA_[expression_data]).json",
};

export const fakeProject: Project = {
  id: "1",
  name: "Fake Project",
  datasetId: "1",
  history: [],
};

export const highExpressed: TitleExpress = {
  title: "High Expressed",
};

export const lowExpressed: TitleExpress = {
  title: "Low Expressed",
};

export const blocks = [
  {
    type: "list",
    name: "test",
    userId: "Id8HuHJZkRcHV8GY1yG2ZfI017f2",
    projectId: "8b50463b-1067-4569-a7b6-56669606a69c",
    code: "expression_clinical = expression_data.T.merge(clinical_data[['age_at_initial_pathologic_diagnosis']], left_index=True, right_index=True, how='inner')\nexpression_clinical['age_at_initial_pathologic_diagnosis'].mode()\n",
    content:
      "0 \n  70.0 \n Name: age_at_initial_pathologic_diagnosis \n dtype: float64",
    id: "3fdb426b-cfc2-4338-896b-e730bd4a3b52",
  },
  {
    content:
      "https://firebasestorage.googleapis.com/v0/b/bionl-vue.appspot.com/o/uploads%2Fblocks%2F8b50463b-1067-4569-a7b6-56669606a69c%2Fbp-4a309e15-03d2-4922-bbfb-3fc3031e52cd?alt=media&token=4e546355-5a77-4ed7-a8fa-c13ceff9bace",
    userId: "Id8HuHJZkRcHV8GY1yG2ZfI017f2",
    projectId: "8b50463b-1067-4569-a7b6-56669606a69c",
    name: "Plot A1Bg",
    type: "plot",
    code: "sns.displot(expression_data.loc['A1BG', :], kde=True)\nplt.show()\n\n",
    id: "4a309e15-03d2-4922-bbfb-3fc3031e52cd",
  },
  {
    userId: "Id8HuHJZkRcHV8GY1yG2ZfI017f2",
    content:
      "0 \n  70.0 \n Name: age_at_initial_pathologic_diagnosis \n dtype: float64",
    type: "list",
    name: "test",
    projectId: "8b50463b-1067-4569-a7b6-56669606a69c",
    code: "expression_clinical = expression_data.T.merge(clinical_data[['age_at_initial_pathologic_diagnosis']], left_index=True, right_index=True, how='inner')\nexpression_clinical['age_at_initial_pathologic_diagnosis'].mode()\n",
    id: "54b43bce-074b-43df-bdf3-579befbf9b61",
  },
  {
    code: "sns.displot(expression_data.loc['A1BG', :], kde=True)\nplt.show()\n\n",
    userId: "Id8HuHJZkRcHV8GY1yG2ZfI017f2",
    type: "plot",
    content:
      "https://firebasestorage.googleapis.com/v0/b/bionl-vue.appspot.com/o/uploads%2Fblocks%2F8b50463b-1067-4569-a7b6-56669606a69c%2Fbp-9089ed9d-1d9a-41ea-90b6-8b9bf34403ae?alt=media&token=487a398a-3566-453b-82e5-ad6b57a39b6c",
    name: "Plot A1Bg",
    projectId: "8b50463b-1067-4569-a7b6-56669606a69c",
    id: "9089ed9d-1d9a-41ea-90b6-8b9bf34403ae",
  },
  {
    code: "expression_data.loc['A1BG'].sum()\n",
    content: "1989.0179",
    projectId: "8b50463b-1067-4569-a7b6-56669606a69c",
    userId: "Id8HuHJZkRcHV8GY1yG2ZfI017f2",
    type: "value",
    name: "The sum of A1BG",
    id: "a7a200ce-7733-4c30-aebc-157e140f319d",
  },
  {
    code: "expression_data.loc['A1BG', :].plot(kind='bar', color='yellow')\nplt.show()\n",
    content:
      "https://firebasestorage.googleapis.com/v0/b/bionl-vue.appspot.com/o/uploads%2Fblocks%2F8b50463b-1067-4569-a7b6-56669606a69c%2Fbp-ba3c367e-e6ea-4313-9faa-6312ceedff22?alt=media&token=d8b99758-3ff1-471c-b836-4f7b8eb1966b",
    projectId: "8b50463b-1067-4569-a7b6-56669606a69c",
    name: "plot A1BG with yellow bars",
    type: "plot",
    userId: "Id8HuHJZkRcHV8GY1yG2ZfI017f2",
    id: "ba3c367e-e6ea-4313-9faa-6312ceedff22",
  },
  {
    code: "expression_clinical = expression_data.T.merge(clinical_data[['age_at_initial_pathologic_diagnosis']], left_index=True, right_index=True, how='inner')\nexpression_clinical['age_at_initial_pathologic_diagnosis'].mode()\n",
    type: "list",
    content:
      "0    70.0\nName: age_at_initial_pathologic_diagnosis, dtype: float64",
    userId: "Id8HuHJZkRcHV8GY1yG2ZfI017f2",
    projectId: "8b50463b-1067-4569-a7b6-56669606a69c",
    name: "test",
    id: "bccecc19-3399-4fe6-bb53-9b7dcff74bbe",
  },
  {
    code: "expression_data.loc['A1BG', :].plot(kind='bar', color='yellow')\nplt.show()\n",
    userId: "Id8HuHJZkRcHV8GY1yG2ZfI017f2",
    type: "plot",
    projectId: "8b50463b-1067-4569-a7b6-56669606a69c",
    name: "plot A1BG with yellow bars",
    content:
      "https://firebasestorage.googleapis.com/v0/b/bionl-vue.appspot.com/o/uploads%2Fblocks%2F8b50463b-1067-4569-a7b6-56669606a69c%2Fbp-c4a7ce00-636b-4525-b6fa-84f3ead41e96?alt=media&token=60d27f5b-4a63-426c-a64c-0cdf1989bcf4",
    id: "c4a7ce00-636b-4525-b6fa-84f3ead41e96",
  },
];

export const projects = [
  {
    id: 1,
    title: "First project title goes here",
    entries: 10,
    geneExpression: "PAAD",
    createdAt: new Date("2023-01-06"),
    updatedAt: new Date(),
  },
];

export const datasets = [
  {
    filename: "BRCA_TCGA_[cnv_data]",
    data_source: "TCGA",
    tissueType: "BRCA",
    dataType: "CNV data",
    format: "csv",
  },
  {
    filename: "BRCA_TCGA_[expression_data]",
    data_source: "TCGA",
    tissueType: "BRCA",
    dataType: "Expression data",
  },
  {
    filename: "BRCA_TCGA_[proteomic_data]",
    data_source: "TCGA",
    tissueType: "BRCA",
    dataType: "Proteomic data",
  },
  {
    filename: "BRCA_TCGA_[snp_data]",
    data_source: "TCGA",
    tissueType: "BRCA",
    dataType: "SNP data",
  },
  {
    filename: "GBM_TCGA_[cnv_data]",
    data_source: "TCGA",
    tissueType: "GBM",
    dataType: "CNV data",
  },
  {
    filename: "GBM_TCGA_[expression_data]",
    data_source: "TCGA",
    tissueType: "GBM",
    dataType: "Expression data",
  },
  {
    filename: "GBM_TCGA_[proteomic_data]",
    data_source: "TCGA",
    tissueType: "GBM",
    dataType: "Proteomic data",
  },
  {
    filename: "GBM_TCGA_[snp_data]",
    data_source: "TCGA",
    tissueType: "GBM",
    dataType: "SNP data",
  },
  {
    filename: "HNSC_TCGA_[cnv_data]",
    data_source: "TCGA",
    tissueType: "HNSC",
    dataType: "CNV data",
  },
  {
    filename: "HNSC_TCGA_[expression_data]",
    data_source: "TCGA",
    tissueType: "HNSC",
    dataType: "Expression data",
  },
  {
    filename: "HNSC_TCGA_[proteomic_data]",
    data_source: "TCGA",
    tissueType: "HNSC",
    dataType: "Proteomic data",
  },
  {
    filename: "HNSC_TCGA_[snp_data]",
    data_source: "TCGA",
    tissueType: "HNSC",
    dataType: "SNP data",
  },
  {
    filename: "LAML_TCGA_[cnv_data]",
    data_source: "TCGA",
    tissueType: "LAML",
    dataType: "CNV data",
  },
  {
    filename: "LAML_TCGA_[expression_data]",
    data_source: "TCGA",
    tissueType: "LAML",
    dataType: "Expression data",
  },
  {
    filename: "LUAD_TCGA_[cnv_data]",
    data_source: "TCGA",
    tissueType: "LUAD",
    dataType: "CNV data",
  },
  {
    filename: "LUAD_TCGA_[expression_data]",
    data_source: "TCGA",
    tissueType: "LUAD",
    dataType: "Expression data",
  },
  {
    filename: "LUAD_TCGA_[proteomic_data]",
    data_source: "TCGA",
    tissueType: "LUAD",
    dataType: "Proteomic data",
  },
  {
    filename: "LUAD_TCGA_[snp_data]",
    data_source: "TCGA",
    tissueType: "LUAD",
    dataType: "SNP data",
  },
  {
    filename: "OV_TCGA_[cnv_data]",
    data_source: "TCGA",
    tissueType: "OV",
    dataType: "CNV data",
  },
  {
    filename: "OV_TCGA_[expression_data]",
    data_source: "TCGA",
    tissueType: "OV",
    dataType: "Expression data",
  },
  {
    filename: "OV_TCGA_[proteomic_data]",
    data_source: "TCGA",
    tissueType: "OV",
    dataType: "Proteomic data",
  },
  {
    filename: "OV_TCGA_[snp_data]",
    data_source: "TCGA",
    tissueType: "OV",
    dataType: "SNP data",
  },
  {
    filename: "PAAD_TCGA_[cnv_data]",
    data_source: "TCGA",
    tissueType: "PAAD",
    dataType: "CNV data",
  },
  {
    filename: "PAAD_TCGA_[expression_data]",
    data_source: "TCGA",
    tissueType: "PAAD",
    dataType: "Expression data",
  },
  {
    filename: "PAAD_TCGA_[proteomic_data]",
    data_source: "TCGA",
    tissueType: "PAAD",
    dataType: "Proteomic data",
  },
  {
    filename: "PAAD_TCGA_[snp_data]",
    data_source: "TCGA",
    tissueType: "PAAD",
    dataType: "SNP data",
  },
];

export const datasetsV2 = [
  {
    Dataset: "TCGA",
    Tissue_code: "GBM",
    Tissue_source: "Glioblastoma Multiforme",
    Tissue_standard: "Brain and CNS",
    "Data Type": "mRNA expression",
    In_prod: "TRUE",
    "Data Source":
      "https://xenabrowser.net/datapages/?cohort=TCGA%20Pan-Cancer%20(PANCAN)&removeHub=https%3A%2F%2Fxena.treehouse.gi.ucsc.edu%3A443",
    "Data Link":
      "https://www.cancer.gov/about-nci/organization/ccg/research/structural-genomics/tcga",
    "Number of samples": 165,
    "Number of Identifiers": "58,581",
    Summary_general:
      "The TCGA pan-cancer atlas provides an analysis of 33 common cancer types (over 11000 tumors in humans). It shows a comprehensive view of cancers and how they have arisen with the help of OMIC data. It provides a good insight into the development of targeted treatments for cancer.",
    Summary_Specific:
      "This dataset includes mRNA expression data for TCGA Glioblastoma Multiforme samples along with their clinical data.",
  },
  {
    Dataset: "TCGA",
    Tissue_code: "LGG",
    Tissue_source: "Brain Lower Grade Glioma",
    Tissue_standard: "Brain and CNS",
    "Data Type": "mRNA expression",
    In_prod: "TRUE",
    "Data Source":
      "https://xenabrowser.net/datapages/?cohort=TCGA%20Pan-Cancer%20(PANCAN)&removeHub=https%3A%2F%2Fxena.treehouse.gi.ucsc.edu%3A444",
    "Data Link":
      "https://www.cancer.gov/about-nci/organization/ccg/research/structural-genomics/tcga",
    "Number of samples": 522,
    "Number of Identifiers": "58,581",
    Summary_general: "",
    Summary_Specific:
      "This dataset includes mRNA expression data for TCGA Brain Lower Grade Glioma samples along with their clinical data.",
  },
  {
    Dataset: "TCGA",
    Tissue_code: "LIHC",
    Tissue_source: "Liver Hepatocellular Carcinoma",
    Tissue_standard: "Liver",
    "Data Type": "mRNA expression",
    In_prod: "TRUE",
    "Data Source":
      "https://xenabrowser.net/datapages/?cohort=TCGA%20Pan-Cancer%20(PANCAN)&removeHub=https%3A%2F%2Fxena.treehouse.gi.ucsc.edu%3A445",
    "Data Link":
      "https://www.cancer.gov/about-nci/organization/ccg/research/structural-genomics/tcga",
    "Number of samples": 371,
    "Number of Identifiers": "58,581",
    Summary_general: "",
    Summary_Specific:
      "This dataset includes mRNA expression data for TCGA Liver Hepatocellular Carcinoma samples along with their clinical data.",
  },
  {
    Dataset: "TCGA",
    Tissue_code: "CESC",
    Tissue_source: "Cervical & Endocervical Cancer",
    Tissue_standard: "Cervix",
    "Data Type": "mRNA expression",
    In_prod: "TRUE",
    "Data Source":
      "https://xenabrowser.net/datapages/?cohort=TCGA%20Pan-Cancer%20(PANCAN)&removeHub=https%3A%2F%2Fxena.treehouse.gi.ucsc.edu%3A446",
    "Data Link":
      "https://www.cancer.gov/about-nci/organization/ccg/research/structural-genomics/tcga",
    "Number of samples": 306,
    "Number of Identifiers": "58,581",
    Summary_general: "",
    Summary_Specific:
      "This dataset includes mRNA expression data for TCGA Cervical & Endocervical Cancer samples along with their clinical data.",
  },
  {
    Dataset: "TCGA",
    Tissue_code: "LUAD",
    Tissue_source: "Lung Adenocarcinoma",
    Tissue_standard: "Lung",
    "Data Type": "mRNA expression",
    In_prod: "TRUE",
    "Data Source":
      "https://xenabrowser.net/datapages/?cohort=TCGA%20Pan-Cancer%20(PANCAN)&removeHub=https%3A%2F%2Fxena.treehouse.gi.ucsc.edu%3A447",
    "Data Link":
      "https://www.cancer.gov/about-nci/organization/ccg/research/structural-genomics/tcga",
    "Number of samples": 515,
    "Number of Identifiers": "58,581",
    Summary_general: "",
    Summary_Specific:
      "This dataset includes mRNA expression data for TCGA Lung Adenocarcinoma samples along with their clinical data.",
  },
  {
    Dataset: "TCGA",
    Tissue_code: "COAD",
    Tissue_source: "Colon Adenocarcinoma",
    Tissue_standard: "Colon",
    "Data Type": "mRNA expression",
    In_prod: "TRUE",
    "Data Source":
      "https://xenabrowser.net/datapages/?cohort=TCGA%20Pan-Cancer%20(PANCAN)&removeHub=https%3A%2F%2Fxena.treehouse.gi.ucsc.edu%3A448",
    "Data Link":
      "https://www.cancer.gov/about-nci/organization/ccg/research/structural-genomics/tcga",
    "Number of samples": 288,
    "Number of Identifiers": "58,581",
    Summary_general: "",
    Summary_Specific:
      "This dataset includes mRNA expression data for TCGA Colon Adenocarcinoma samples along with their clinical data.",
  },
  {
    Dataset: "TCGA",
    Tissue_code: "LAML",
    Tissue_source: "Acute Myeloid Leukemia",
    Tissue_standard: "Blood and Lymph",
    "Data Type": "mRNA expression",
    In_prod: "TRUE",
    "Data Source":
      "https://xenabrowser.net/datapages/?cohort=TCGA%20Pan-Cancer%20(PANCAN)&removeHub=https%3A%2F%2Fxena.treehouse.gi.ucsc.edu%3A449",
    "Data Link":
      "https://www.cancer.gov/about-nci/organization/ccg/research/structural-genomics/tcga",
    "Number of samples": 173,
    "Number of Identifiers": "58,581",
    Summary_general: "",
    Summary_Specific:
      "This dataset includes mRNA expression data for TCGA Acute Myeloid Leukemia samples along with their clinical data.",
  },
  {
    Dataset: "TCGA",
    Tissue_code: "BRCA",
    Tissue_source: "Breast Invasive Carcinoma",
    Tissue_standard: "Breast",
    "Data Type": "mRNA expression",
    In_prod: "TRUE",
    "Data Source":
      "https://xenabrowser.net/datapages/?cohort=TCGA%20Pan-Cancer%20(PANCAN)&removeHub=https%3A%2F%2Fxena.treehouse.gi.ucsc.edu%3A450",
    "Data Link":
      "https://www.cancer.gov/about-nci/organization/ccg/research/structural-genomics/tcga",
    "Number of samples": 1098,
    "Number of Identifiers": "58,581",
    Summary_general: "",
    Summary_Specific:
      "This dataset includes mRNA expression data for TCGA Breast Invasive Carcinoma samples along with their clinical data.",
  },
  {
    Dataset: "TCGA",
    Tissue_code: "ESCA",
    Tissue_source: "Esophageal Carcinoma",
    Tissue_standard: "Esophagus",
    "Data Type": "mRNA expression",
    In_prod: "TRUE",
    "Data Source":
      "https://xenabrowser.net/datapages/?cohort=TCGA%20Pan-Cancer%20(PANCAN)&removeHub=https%3A%2F%2Fxena.treehouse.gi.ucsc.edu%3A451",
    "Data Link":
      "https://www.cancer.gov/about-nci/organization/ccg/research/structural-genomics/tcga",
    "Number of samples": 182,
    "Number of Identifiers": "58,581",
    Summary_general: "",
    Summary_Specific:
      "This dataset includes mRNA expression data for TCGA Esophageal Carcinoma samples along with their clinical data.",
  },
  {
    Dataset: "TCGA",
    Tissue_code: "SARC",
    Tissue_source: "Sarcoma",
    Tissue_standard: "Bone and Connective Tissue",
    "Data Type": "mRNA expression",
    In_prod: "TRUE",
    "Data Source":
      "https://xenabrowser.net/datapages/?cohort=TCGA%20Pan-Cancer%20(PANCAN)&removeHub=https%3A%2F%2Fxena.treehouse.gi.ucsc.edu%3A452",
    "Data Link":
      "https://www.cancer.gov/about-nci/organization/ccg/research/structural-genomics/tcga",
    "Number of samples": 262,
    "Number of Identifiers": "58,581",
    Summary_general: "",
    Summary_Specific:
      "This dataset includes mRNA expression data for TCGA Sarcoma samples along with their clinical data.",
  },
  {
    Dataset: "TCGA",
    Tissue_code: "KIRP",
    Tissue_source: "Kidney Papillary Cell Carcinoma",
    Tissue_standard: "Kidney",
    "Data Type": "mRNA expression",
    In_prod: "TRUE",
    "Data Source":
      "https://xenabrowser.net/datapages/?cohort=TCGA%20Pan-Cancer%20(PANCAN)&removeHub=https%3A%2F%2Fxena.treehouse.gi.ucsc.edu%3A453",
    "Data Link":
      "https://www.cancer.gov/about-nci/organization/ccg/research/structural-genomics/tcga",
    "Number of samples": 289,
    "Number of Identifiers": "58,581",
    Summary_general: "",
    Summary_Specific:
      "This dataset includes mRNA expression data for TCGA Kidney Papillary Cell Carcinoma samples along with their clinical data.",
  },
  {
    Dataset: "TCGA",
    Tissue_code: "STAD",
    Tissue_source: "Stomach Adenocarcinoma",
    Tissue_standard: "Stomach",
    "Data Type": "mRNA expression",
    In_prod: "TRUE",
    "Data Source":
      "https://xenabrowser.net/datapages/?cohort=TCGA%20Pan-Cancer%20(PANCAN)&removeHub=https%3A%2F%2Fxena.treehouse.gi.ucsc.edu%3A454",
    "Data Link":
      "https://www.cancer.gov/about-nci/organization/ccg/research/structural-genomics/tcga",
    "Number of samples": 414,
    "Number of Identifiers": "58,581",
    Summary_general: "",
    Summary_Specific:
      "This dataset includes mRNA expression data for TCGA Stomach Adenocarcinoma samples along with their clinical data.",
  },
  {
    Dataset: "TCGA",
    Tissue_code: "PRAD",
    Tissue_source: "Prostate Adenocarcinoma",
    Tissue_standard: "Prostate",
    "Data Type": "mRNA expression",
    In_prod: "TRUE",
    "Data Source":
      "https://xenabrowser.net/datapages/?cohort=TCGA%20Pan-Cancer%20(PANCAN)&removeHub=https%3A%2F%2Fxena.treehouse.gi.ucsc.edu%3A455",
    "Data Link":
      "https://www.cancer.gov/about-nci/organization/ccg/research/structural-genomics/tcga",
    "Number of samples": 496,
    "Number of Identifiers": "58,581",
    Summary_general: "",
    Summary_Specific:
      "This dataset includes mRNA expression data for TCGA Prostate Adenocarcinoma samples along with their clinical data.",
  },
  {
    Dataset: "TCGA",
    Tissue_code: "SKCM",
    Tissue_source: "Skin Cutaneous Melanoma",
    Tissue_standard: "Skin",
    "Data Type": "mRNA expression",
    In_prod: "TRUE",
    "Data Source":
      "https://xenabrowser.net/datapages/?cohort=TCGA%20Pan-Cancer%20(PANCAN)&removeHub=https%3A%2F%2Fxena.treehouse.gi.ucsc.edu%3A456",
    "Data Link":
      "https://www.cancer.gov/about-nci/organization/ccg/research/structural-genomics/tcga",
    "Number of samples": 469,
    "Number of Identifiers": "58,581",
    Summary_general: "",
    Summary_Specific:
      "This dataset includes mRNA expression data for TCGA Skin Cutaneous Melanoma samples along with their clinical data.",
  },
  {
    Dataset: "TCGA",
    Tissue_code: "UCEC",
    Tissue_source: "Uterine Corpus Endometrioid Carcinoma",
    Tissue_standard: "Uterus",
    "Data Type": "mRNA expression",
    In_prod: "TRUE",
    "Data Source":
      "https://xenabrowser.net/datapages/?cohort=TCGA%20Pan-Cancer%20(PANCAN)&removeHub=https%3A%2F%2Fxena.treehouse.gi.ucsc.edu%3A457",
    "Data Link":
      "https://www.cancer.gov/about-nci/organization/ccg/research/structural-genomics/tcga",
    "Number of samples": 181,
    "Number of Identifiers": "58,581",
    Summary_general: "",
    Summary_Specific:
      "This dataset includes mRNA expression data for TCGA Uterine Corpus Endometrioid Carcinoma samples along with their clinical data.",
  },
  {
    Dataset: "TCGA",
    Tissue_code: "HNSC",
    Tissue_source: "Head & Neck Squamous Cell Carcinoma",
    Tissue_standard: "Head and neck",
    "Data Type": "mRNA expression",
    In_prod: "TRUE",
    "Data Source":
      "https://xenabrowser.net/datapages/?cohort=TCGA%20Pan-Cancer%20(PANCAN)&removeHub=https%3A%2F%2Fxena.treehouse.gi.ucsc.edu%3A458",
    "Data Link":
      "https://www.cancer.gov/about-nci/organization/ccg/research/structural-genomics/tcga",
    "Number of samples": 520,
    "Number of Identifiers": "58,581",
    Summary_general: "",
    Summary_Specific:
      "This dataset includes mRNA expression data for TCGA Head & Neck Squamous Cell Carcinoma samples along with their clinical data.",
  },
  {
    Dataset: "TCGA",
    Tissue_code: "KIRC",
    Tissue_source: "Kidney Clear Cell Carcinoma",
    Tissue_standard: "Kidney",
    "Data Type": "mRNA expression",
    In_prod: "TRUE",
    "Data Source":
      "https://xenabrowser.net/datapages/?cohort=TCGA%20Pan-Cancer%20(PANCAN)&removeHub=https%3A%2F%2Fxena.treehouse.gi.ucsc.edu%3A459",
    "Data Link":
      "https://www.cancer.gov/about-nci/organization/ccg/research/structural-genomics/tcga",
    "Number of samples": 531,
    "Number of Identifiers": "58,581",
    Summary_general: "",
    Summary_Specific:
      "This dataset includes mRNA expression data for TCGA Kidney Clear Cell Carcinoma samples along with their clinical data.",
  },
  {
    Dataset: "TCGA",
    Tissue_code: "LUSC",
    Tissue_source: "Lung Squamous Cell Carcinoma",
    Tissue_standard: "Lung",
    "Data Type": "mRNA expression",
    In_prod: "TRUE",
    "Data Source":
      "https://xenabrowser.net/datapages/?cohort=TCGA%20Pan-Cancer%20(PANCAN)&removeHub=https%3A%2F%2Fxena.treehouse.gi.ucsc.edu%3A460",
    "Data Link":
      "https://www.cancer.gov/about-nci/organization/ccg/research/structural-genomics/tcga",
    "Number of samples": 498,
    "Number of Identifiers": "58,581",
    Summary_general: "",
    Summary_Specific:
      "This dataset includes mRNA expression data for TCGA Lung Squamous Cell Carcinoma samples along with their clinical data.",
  },
  {
    Dataset: "TCGA",
    Tissue_code: "THYM",
    Tissue_source: "Thymoma",
    Tissue_standard: "Thymus",
    "Data Type": "mRNA expression",
    In_prod: "TRUE",
    "Data Source":
      "https://xenabrowser.net/datapages/?cohort=TCGA%20Pan-Cancer%20(PANCAN)&removeHub=https%3A%2F%2Fxena.treehouse.gi.ucsc.edu%3A461",
    "Data Link":
      "https://www.cancer.gov/about-nci/organization/ccg/research/structural-genomics/tcga",
    "Number of samples": 119,
    "Number of Identifiers": "58,581",
    Summary_general: "",
    Summary_Specific:
      "This dataset includes mRNA expression data for TCGA Thymoma samples along with their clinical data.",
  },
  {
    Dataset: "TCGA",
    Tissue_code: "THCA",
    Tissue_source: "Thyroid Carcinoma",
    Tissue_standard: "Thyroid",
    "Data Type": "mRNA expression",
    In_prod: "TRUE",
    "Data Source":
      "https://xenabrowser.net/datapages/?cohort=TCGA%20Pan-Cancer%20(PANCAN)&removeHub=https%3A%2F%2Fxena.treehouse.gi.ucsc.edu%3A462",
    "Data Link":
      "https://www.cancer.gov/about-nci/organization/ccg/research/structural-genomics/tcga",
    "Number of samples": 512,
    "Number of Identifiers": "58,581",
    Summary_general: "",
    Summary_Specific:
      "This dataset includes mRNA expression data for TCGA Thyroid Carcinoma samples along with their clinical data.",
  },
  {
    Dataset: "TCGA",
    Tissue_code: "READ",
    Tissue_source: "Rectum Adenocarcinoma",
    Tissue_standard: "Rectum",
    "Data Type": "mRNA expression",
    In_prod: "TRUE",
    "Data Source":
      "https://xenabrowser.net/datapages/?cohort=TCGA%20Pan-Cancer%20(PANCAN)&removeHub=https%3A%2F%2Fxena.treehouse.gi.ucsc.edu%3A463",
    "Data Link":
      "https://www.cancer.gov/about-nci/organization/ccg/research/structural-genomics/tcga",
    "Number of samples": 92,
    "Number of Identifiers": "58,581",
    Summary_general: "",
    Summary_Specific:
      "This dataset includes mRNA expression data for TCGA Rectum Adenocarcinoma samples along with their clinical data.",
  },
  {
    Dataset: "TCGA",
    Tissue_code: "PAAD",
    Tissue_source: "Pancreatic Adenocarcinoma",
    Tissue_standard: "Pancreas",
    "Data Type": "mRNA expression",
    In_prod: "TRUE",
    "Data Source":
      "https://xenabrowser.net/datapages/?cohort=TCGA%20Pan-Cancer%20(PANCAN)&removeHub=https%3A%2F%2Fxena.treehouse.gi.ucsc.edu%3A464",
    "Data Link":
      "https://www.cancer.gov/about-nci/organization/ccg/research/structural-genomics/tcga",
    "Number of samples": 179,
    "Number of Identifiers": "58,581",
    Summary_general: "",
    Summary_Specific:
      "This dataset includes mRNA expression data for TCGA Pancreatic Adenocarcinoma samples along with their clinical data.",
  },
  {
    Dataset: "TCGA",
    Tissue_code: "OV",
    Tissue_source: "Ovarian Serous Cystadenocarcinoma",
    Tissue_standard: "Ovary",
    "Data Type": "mRNA expression",
    In_prod: "TRUE",
    "Data Source":
      "https://xenabrowser.net/datapages/?cohort=TCGA%20Pan-Cancer%20(PANCAN)&removeHub=https%3A%2F%2Fxena.treehouse.gi.ucsc.edu%3A465",
    "Data Link":
      "https://www.cancer.gov/about-nci/organization/ccg/research/structural-genomics/tcga",
    "Number of samples": 427,
    "Number of Identifiers": "58,581",
    Summary_general: "",
    Summary_Specific:
      "This dataset includes mRNA expression data for TCGA Ovarian Serous Cystadenocarcinoma samples along with their clinical data.",
  },
  {
    Dataset: "TCGA",
    Tissue_code: "TGCT",
    Tissue_source: "Testicular Germ Cell Tumor",
    Tissue_standard: "Testes",
    "Data Type": "mRNA expression",
    In_prod: "TRUE",
    "Data Source":
      "https://xenabrowser.net/datapages/?cohort=TCGA%20Pan-Cancer%20(PANCAN)&removeHub=https%3A%2F%2Fxena.treehouse.gi.ucsc.edu%3A466",
    "Data Link":
      "https://www.cancer.gov/about-nci/organization/ccg/research/structural-genomics/tcga",
    "Number of samples": 137,
    "Number of Identifiers": "58,581",
    Summary_general: "",
    Summary_Specific:
      "This dataset includes mRNA expression data for TCGA Testicular Germ Cell Tumor samples along with their clinical data.",
  },
  {
    Dataset: "TCGA",
    Tissue_code: "PCPG",
    Tissue_source: "Pheochromocytoma & Paraganglioma",
    Tissue_standard: "Neuroendocrine",
    "Data Type": "mRNA expression",
    In_prod: "TRUE",
    "Data Source":
      "https://xenabrowser.net/datapages/?cohort=TCGA%20Pan-Cancer%20(PANCAN)&removeHub=https%3A%2F%2Fxena.treehouse.gi.ucsc.edu%3A467",
    "Data Link":
      "https://www.cancer.gov/about-nci/organization/ccg/research/structural-genomics/tcga",
    "Number of samples": 182,
    "Number of Identifiers": "58,581",
    Summary_general: "",
    Summary_Specific:
      "This dataset includes mRNA expression data for TCGA Pheochromocytoma & Paraganglioma samples along with their clinical data.",
  },
  {
    Dataset: "TCGA",
    Tissue_code: "BLCA",
    Tissue_source: "Bladder Urothelial Carcinoma",
    Tissue_standard: "Bladder",
    "Data Type": "mRNA expression",
    In_prod: "TRUE",
    "Data Source":
      "https://xenabrowser.net/datapages/?cohort=TCGA%20Pan-Cancer%20(PANCAN)&removeHub=https%3A%2F%2Fxena.treehouse.gi.ucsc.edu%3A468",
    "Data Link":
      "https://www.cancer.gov/about-nci/organization/ccg/research/structural-genomics/tcga",
    "Number of samples": 407,
    "Number of Identifiers": "60,499",
    Summary_general: "",
    Summary_Specific:
      "This dataset includes mRNA expression data for TCGA Bladder Urothelial Carcinoma samples along with their clinical data.",
  },
  {
    Dataset: "TCGA",
    Tissue_code: "GBM",
    Tissue_source: "Glioblastoma Multiforme",
    Tissue_standard: "Brain and CNS",
    "Data Type": "mutations",
    In_prod: "TRUE",
    "Data Source":
      "https://xenabrowser.net/datapages/?cohort=TCGA%20Pan-Cancer%20(PANCAN)&removeHub=https%3A%2F%2Fxena.treehouse.gi.ucsc.edu%3A469",
    "Data Link":
      "https://www.cancer.gov/about-nci/organization/ccg/research/structural-genomics/tcga",
    "Number of samples": 311,
    "Number of Identifiers": "40,543",
    Summary_general: "",
    Summary_Specific:
      "This dataset includes mutations data for TCGA Glioblastoma Multiforme samples along with their clinical data.",
  },
  {
    Dataset: "TCGA",
    Tissue_code: "LUAD",
    Tissue_source: "Lung Adenocarcinoma",
    Tissue_standard: "Lung",
    "Data Type": "mutations",
    In_prod: "TRUE",
    "Data Source":
      "https://xenabrowser.net/datapages/?cohort=TCGA%20Pan-Cancer%20(PANCAN)&removeHub=https%3A%2F%2Fxena.treehouse.gi.ucsc.edu%3A470",
    "Data Link":
      "https://www.cancer.gov/about-nci/organization/ccg/research/structural-genomics/tcga",
    "Number of samples": 513,
    "Number of Identifiers": "40,543",
    Summary_general: "",
    Summary_Specific:
      "This dataset includes mutations data for TCGA Lung Adenocarcinoma samples along with their clinical data.",
  },
  {
    Dataset: "TCGA",
    Tissue_code: "LUSC",
    Tissue_source: "Lung Squamous Cell Carcinoma",
    Tissue_standard: "Lung",
    "Data Type": "mutations",
    In_prod: "TRUE",
    "Data Source":
      "https://xenabrowser.net/datapages/?cohort=TCGA%20Pan-Cancer%20(PANCAN)&removeHub=https%3A%2F%2Fxena.treehouse.gi.ucsc.edu%3A471",
    "Data Link":
      "https://www.cancer.gov/about-nci/organization/ccg/research/structural-genomics/tcga",
    "Number of samples": 480,
    "Number of Identifiers": "40,543",
    Summary_general: "",
    Summary_Specific:
      "This dataset includes mutations data for TCGA Lung Squamous Cell Carcinoma samples along with their clinical data.",
  },
  {
    Dataset: "TCGA",
    Tissue_code: "PRAD",
    Tissue_source: "Prostate Adenocarcinoma",
    Tissue_standard: "Prostate",
    "Data Type": "mutations",
    In_prod: "TRUE",
    "Data Source":
      "https://xenabrowser.net/datapages/?cohort=TCGA%20Pan-Cancer%20(PANCAN)&removeHub=https%3A%2F%2Fxena.treehouse.gi.ucsc.edu%3A472",
    "Data Link":
      "https://www.cancer.gov/about-nci/organization/ccg/research/structural-genomics/tcga",
    "Number of samples": 495,
    "Number of Identifiers": "40,543",
    Summary_general: "",
    Summary_Specific:
      "This dataset includes mutations data for TCGA Prostate Adenocarcinoma samples along with their clinical data.",
  },
  {
    Dataset: "TCGA",
    Tissue_code: "UCEC",
    Tissue_source: "Uterine Corpus Endometrioid Carcinoma",
    Tissue_standard: "Uterus",
    "Data Type": "mutations",
    In_prod: "TRUE",
    "Data Source":
      "https://xenabrowser.net/datapages/?cohort=TCGA%20Pan-Cancer%20(PANCAN)&removeHub=https%3A%2F%2Fxena.treehouse.gi.ucsc.edu%3A473",
    "Data Link":
      "https://www.cancer.gov/about-nci/organization/ccg/research/structural-genomics/tcga",
    "Number of samples": 447,
    "Number of Identifiers": "40,543",
    Summary_general: "",
    Summary_Specific:
      "This dataset includes mutations data for TCGA Uterine Corpus Endometrioid Carcinoma samples along with their clinical data.",
  },
  {
    Dataset: "TCGA",
    Tissue_code: "BLCA",
    Tissue_source: "Bladder Urothelial Carcinoma",
    Tissue_standard: "Bladder",
    "Data Type": "mutations",
    In_prod: "TRUE",
    "Data Source":
      "https://xenabrowser.net/datapages/?cohort=TCGA%20Pan-Cancer%20(PANCAN)&removeHub=https%3A%2F%2Fxena.treehouse.gi.ucsc.edu%3A474",
    "Data Link":
      "https://www.cancer.gov/about-nci/organization/ccg/research/structural-genomics/tcga",
    "Number of samples": 411,
    "Number of Identifiers": "40,543",
    Summary_general: "",
    Summary_Specific:
      "This dataset includes mutations data for TCGA Bladder Urothelial Carcinoma samples along with their clinical data.",
  },
  {
    Dataset: "TCGA",
    Tissue_code: "TGCT",
    Tissue_source: "Testicular Germ Cell Tumor",
    Tissue_standard: "Testes",
    "Data Type": "mutations",
    In_prod: "TRUE",
    "Data Source":
      "https://xenabrowser.net/datapages/?cohort=TCGA%20Pan-Cancer%20(PANCAN)&removeHub=https%3A%2F%2Fxena.treehouse.gi.ucsc.edu%3A475",
    "Data Link":
      "https://www.cancer.gov/about-nci/organization/ccg/research/structural-genomics/tcga",
    "Number of samples": 129,
    "Number of Identifiers": "40,543",
    Summary_general: "",
    Summary_Specific:
      "This dataset includes mutations data for TCGA Testicular Germ Cell Tumor samples along with their clinical data.",
  },
  {
    Dataset: "TCGA",
    Tissue_code: "ESCA",
    Tissue_source: "Esophageal Carcinoma",
    Tissue_standard: "Esophagus",
    "Data Type": "mutations",
    In_prod: "TRUE",
    "Data Source":
      "https://xenabrowser.net/datapages/?cohort=TCGA%20Pan-Cancer%20(PANCAN)&removeHub=https%3A%2F%2Fxena.treehouse.gi.ucsc.edu%3A476",
    "Data Link":
      "https://www.cancer.gov/about-nci/organization/ccg/research/structural-genomics/tcga",
    "Number of samples": 184,
    "Number of Identifiers": "40,543",
    Summary_general: "",
    Summary_Specific:
      "This dataset includes mutations data for TCGA Esophageal Carcinoma samples along with their clinical data.",
  },
  {
    Dataset: "TCGA",
    Tissue_code: "PAAD",
    Tissue_source: "Pancreatic Adenocarcinoma",
    Tissue_standard: "Pancreas",
    "Data Type": "mutations",
    In_prod: "TRUE",
    "Data Source":
      "https://xenabrowser.net/datapages/?cohort=TCGA%20Pan-Cancer%20(PANCAN)&removeHub=https%3A%2F%2Fxena.treehouse.gi.ucsc.edu%3A477",
    "Data Link":
      "https://www.cancer.gov/about-nci/organization/ccg/research/structural-genomics/tcga",
    "Number of samples": 177,
    "Number of Identifiers": "40,543",
    Summary_general: "",
    Summary_Specific:
      "This dataset includes mutations data for TCGA Pancreatic Adenocarcinoma samples along with their clinical data.",
  },
  {
    Dataset: "TCGA",
    Tissue_code: "KIRP",
    Tissue_source: "Kidney Papillary Cell Carcinoma",
    Tissue_standard: "Kidney",
    "Data Type": "mutations",
    In_prod: "TRUE",
    "Data Source":
      "https://xenabrowser.net/datapages/?cohort=TCGA%20Pan-Cancer%20(PANCAN)&removeHub=https%3A%2F%2Fxena.treehouse.gi.ucsc.edu%3A478",
    "Data Link":
      "https://www.cancer.gov/about-nci/organization/ccg/research/structural-genomics/tcga",
    "Number of samples": 281,
    "Number of Identifiers": "40,543",
    Summary_general: "",
    Summary_Specific:
      "This dataset includes mutations data for TCGA Kidney Papillary Cell Carcinoma samples along with their clinical data.",
  },
  {
    Dataset: "TCGA",
    Tissue_code: "LIHC",
    Tissue_source: "Liver Hepatocellular Carcinoma",
    Tissue_standard: "Liver",
    "Data Type": "mutations",
    In_prod: "TRUE",
    "Data Source":
      "https://xenabrowser.net/datapages/?cohort=TCGA%20Pan-Cancer%20(PANCAN)&removeHub=https%3A%2F%2Fxena.treehouse.gi.ucsc.edu%3A479",
    "Data Link":
      "https://www.cancer.gov/about-nci/organization/ccg/research/structural-genomics/tcga",
    "Number of samples": 363,
    "Number of Identifiers": "40,543",
    Summary_general: "",
    Summary_Specific:
      "This dataset includes mutations data for TCGA Liver Hepatocellular Carcinoma samples along with their clinical data.",
  },
  {
    Dataset: "TCGA",
    Tissue_code: "CESC",
    Tissue_source: "Cervical & Endocervical Cancer",
    Tissue_standard: "Cervix",
    "Data Type": "mutations",
    In_prod: "TRUE",
    "Data Source":
      "https://xenabrowser.net/datapages/?cohort=TCGA%20Pan-Cancer%20(PANCAN)&removeHub=https%3A%2F%2Fxena.treehouse.gi.ucsc.edu%3A480",
    "Data Link":
      "https://www.cancer.gov/about-nci/organization/ccg/research/structural-genomics/tcga",
    "Number of samples": 289,
    "Number of Identifiers": "40,543",
    Summary_general: "",
    Summary_Specific:
      "This dataset includes mutations data for TCGA Cervical & Endocervical Cancer samples along with their clinical data.",
  },
  {
    Dataset: "TCGA",
    Tissue_code: "SARC",
    Tissue_source: "Sarcoma",
    Tissue_standard: "Bone and Connective Tissue",
    "Data Type": "mutations",
    In_prod: "TRUE",
    "Data Source":
      "https://xenabrowser.net/datapages/?cohort=TCGA%20Pan-Cancer%20(PANCAN)&removeHub=https%3A%2F%2Fxena.treehouse.gi.ucsc.edu%3A481",
    "Data Link":
      "https://www.cancer.gov/about-nci/organization/ccg/research/structural-genomics/tcga",
    "Number of samples": 236,
    "Number of Identifiers": "40,543",
    Summary_general: "",
    Summary_Specific:
      "This dataset includes mutations data for TCGA Sarcoma samples along with their clinical data.",
  },
  {
    Dataset: "TCGA",
    Tissue_code: "BRCA",
    Tissue_source: "Breast Invasive Carcinoma",
    Tissue_standard: "Breast",
    "Data Type": "mutations",
    In_prod: "TRUE",
    "Data Source":
      "https://xenabrowser.net/datapages/?cohort=TCGA%20Pan-Cancer%20(PANCAN)&removeHub=https%3A%2F%2Fxena.treehouse.gi.ucsc.edu%3A482",
    "Data Link":
      "https://www.cancer.gov/about-nci/organization/ccg/research/structural-genomics/tcga",
    "Number of samples": 791,
    "Number of Identifiers": "40,543",
    Summary_general: "",
    Summary_Specific:
      "This dataset includes mutations data for TCGA Breast Invasive Carcinoma samples along with their clinical data.",
  },
  {
    Dataset: "TCGA",
    Tissue_code: "THYM",
    Tissue_source: "Thymoma",
    Tissue_standard: "Thymus",
    "Data Type": "mutations",
    In_prod: "TRUE",
    "Data Source":
      "https://xenabrowser.net/datapages/?cohort=TCGA%20Pan-Cancer%20(PANCAN)&removeHub=https%3A%2F%2Fxena.treehouse.gi.ucsc.edu%3A483",
    "Data Link":
      "https://www.cancer.gov/about-nci/organization/ccg/research/structural-genomics/tcga",
    "Number of samples": 122,
    "Number of Identifiers": "40,543",
    Summary_general: "",
    Summary_Specific:
      "This dataset includes mutations data for TCGA Thymoma samples along with their clinical data.",
  },
  {
    Dataset: "TCGA",
    Tissue_code: "COAD",
    Tissue_source: "Colon Adenocarcinoma",
    Tissue_standard: "Colon",
    "Data Type": "mutations",
    In_prod: "TRUE",
    "Data Source":
      "https://xenabrowser.net/datapages/?cohort=TCGA%20Pan-Cancer%20(PANCAN)&removeHub=https%3A%2F%2Fxena.treehouse.gi.ucsc.edu%3A484",
    "Data Link":
      "https://www.cancer.gov/about-nci/organization/ccg/research/structural-genomics/tcga",
    "Number of samples": 288,
    "Number of Identifiers": "40,543",
    Summary_general: "",
    Summary_Specific:
      "This dataset includes mutations data for TCGA Colon Adenocarcinoma samples along with their clinical data.",
  },
  {
    Dataset: "TCGA",
    Tissue_code: "STAD",
    Tissue_source: "Stomach Adenocarcinoma",
    Tissue_standard: "Stomach",
    "Data Type": "mutations",
    In_prod: "TRUE",
    "Data Source":
      "https://xenabrowser.net/datapages/?cohort=TCGA%20Pan-Cancer%20(PANCAN)&removeHub=https%3A%2F%2Fxena.treehouse.gi.ucsc.edu%3A485",
    "Data Link":
      "https://www.cancer.gov/about-nci/organization/ccg/research/structural-genomics/tcga",
    "Number of samples": 439,
    "Number of Identifiers": "40,543",
    Summary_general: "",
    Summary_Specific:
      "This dataset includes mutations data for TCGA Stomach Adenocarcinoma samples along with their clinical data.",
  },
  {
    Dataset: "TCGA",
    Tissue_code: "SKCM",
    Tissue_source: "Skin Cutaneous Melanoma",
    Tissue_standard: "Skin",
    "Data Type": "mutations",
    In_prod: "TRUE",
    "Data Source":
      "https://xenabrowser.net/datapages/?cohort=TCGA%20Pan-Cancer%20(PANCAN)&removeHub=https%3A%2F%2Fxena.treehouse.gi.ucsc.edu%3A486",
    "Data Link":
      "https://www.cancer.gov/about-nci/organization/ccg/research/structural-genomics/tcga",
    "Number of samples": 466,
    "Number of Identifiers": "40,543",
    Summary_general: "",
    Summary_Specific:
      "This dataset includes mutations data for TCGA Skin Cutaneous Melanoma samples along with their clinical data.",
  },
  {
    Dataset: "TCGA",
    Tissue_code: "KIRC",
    Tissue_source: "Kidney Clear Cell Carcinoma",
    Tissue_standard: "Kidney",
    "Data Type": "mutations",
    In_prod: "TRUE",
    "Data Source":
      "https://xenabrowser.net/datapages/?cohort=TCGA%20Pan-Cancer%20(PANCAN)&removeHub=https%3A%2F%2Fxena.treehouse.gi.ucsc.edu%3A487",
    "Data Link":
      "https://www.cancer.gov/about-nci/organization/ccg/research/structural-genomics/tcga",
    "Number of samples": 368,
    "Number of Identifiers": "40,543",
    Summary_general: "",
    Summary_Specific:
      "This dataset includes mutations data for TCGA Kidney Clear Cell Carcinoma samples along with their clinical data.",
  },
  {
    Dataset: "TCGA",
    Tissue_code: "THCA",
    Tissue_source: "Thyroid Carcinoma",
    Tissue_standard: "Thyroid",
    "Data Type": "mutations",
    In_prod: "TRUE",
    "Data Source":
      "https://xenabrowser.net/datapages/?cohort=TCGA%20Pan-Cancer%20(PANCAN)&removeHub=https%3A%2F%2Fxena.treehouse.gi.ucsc.edu%3A488",
    "Data Link":
      "https://www.cancer.gov/about-nci/organization/ccg/research/structural-genomics/tcga",
    "Number of samples": 492,
    "Number of Identifiers": "40,543",
    Summary_general: "",
    Summary_Specific:
      "This dataset includes mutations data for TCGA Thyroid Carcinoma samples along with their clinical data.",
  },
  {
    Dataset: "TCGA",
    Tissue_code: "HNSC",
    Tissue_source: "Head & Neck Squamous Cell Carcinoma",
    Tissue_standard: "Head and neck",
    "Data Type": "mutations",
    In_prod: "TRUE",
    "Data Source":
      "https://xenabrowser.net/datapages/?cohort=TCGA%20Pan-Cancer%20(PANCAN)&removeHub=https%3A%2F%2Fxena.treehouse.gi.ucsc.edu%3A489",
    "Data Link":
      "https://www.cancer.gov/about-nci/organization/ccg/research/structural-genomics/tcga",
    "Number of samples": 507,
    "Number of Identifiers": "40,543",
    Summary_general: "",
    Summary_Specific:
      "This dataset includes mutations data for TCGA Head & Neck Squamous Cell Carcinoma samples along with their clinical data.",
  },
  {
    Dataset: "TCGA",
    Tissue_code: "LGG",
    Tissue_source: "Brain Lower Grade Glioma",
    Tissue_standard: "Brain and CNS",
    "Data Type": "mutations",
    In_prod: "TRUE",
    "Data Source":
      "https://xenabrowser.net/datapages/?cohort=TCGA%20Pan-Cancer%20(PANCAN)&removeHub=https%3A%2F%2Fxena.treehouse.gi.ucsc.edu%3A490",
    "Data Link":
      "https://www.cancer.gov/about-nci/organization/ccg/research/structural-genomics/tcga",
    "Number of samples": 510,
    "Number of Identifiers": "40,543",
    Summary_general: "",
    Summary_Specific:
      "This dataset includes mutations data for TCGA Brain Lower Grade Glioma samples along with their clinical data.",
  },
  {
    Dataset: "TCGA",
    Tissue_code: "PCPG",
    Tissue_source: "Pheochromocytoma & Paraganglioma",
    Tissue_standard: "Neuroendocrine",
    "Data Type": "mutations",
    In_prod: "TRUE",
    "Data Source":
      "https://xenabrowser.net/datapages/?cohort=TCGA%20Pan-Cancer%20(PANCAN)&removeHub=https%3A%2F%2Fxena.treehouse.gi.ucsc.edu%3A491",
    "Data Link":
      "https://www.cancer.gov/about-nci/organization/ccg/research/structural-genomics/tcga",
    "Number of samples": 179,
    "Number of Identifiers": "40,543",
    Summary_general: "",
    Summary_Specific:
      "This dataset includes mutations data for TCGA Pheochromocytoma & Paraganglioma samples along with their clinical data.",
  },
  {
    Dataset: "TCGA",
    Tissue_code: "UCEC",
    Tissue_source: "Uterine Corpus Endometrioid Carcinoma",
    Tissue_standard: "Uterus",
    "Data Type": "protein expression",
    In_prod: "TRUE",
    "Data Source":
      "https://xenabrowser.net/datapages/?cohort=TCGA%20Pan-Cancer%20(PANCAN)&removeHub=https%3A%2F%2Fxena.treehouse.gi.ucsc.edu%3A492",
    "Data Link":
      "https://www.cancer.gov/about-nci/organization/ccg/research/structural-genomics/tcga",
    "Number of samples": 404,
    "Number of Identifiers": 258,
    Summary_general: "",
    Summary_Specific:
      "This dataset includes protein expression expression data for TCGA Uterine Corpus Endometrioid Carcinoma samples along with their clinical data.",
  },
  {
    Dataset: "TCGA",
    Tissue_code: "OV",
    Tissue_source: "Ovarian Serous Cystadenocarcinoma",
    Tissue_standard: "Ovary",
    "Data Type": "protein expression",
    In_prod: "TRUE",
    "Data Source":
      "https://xenabrowser.net/datapages/?cohort=TCGA%20Pan-Cancer%20(PANCAN)&removeHub=https%3A%2F%2Fxena.treehouse.gi.ucsc.edu%3A493",
    "Data Link":
      "https://www.cancer.gov/about-nci/organization/ccg/research/structural-genomics/tcga",
    "Number of samples": 417,
    "Number of Identifiers": 258,
    Summary_general: "",
    Summary_Specific:
      "This dataset includes protein expression expression data for TCGA Ovarian Serous Cystadenocarcinoma samples along with their clinical data.",
  },
  {
    Dataset: "TCGA",
    Tissue_code: "KIRC",
    Tissue_source: "Kidney Clear Cell Carcinoma",
    Tissue_standard: "Kidney",
    "Data Type": "protein expression",
    In_prod: "TRUE",
    "Data Source":
      "https://xenabrowser.net/datapages/?cohort=TCGA%20Pan-Cancer%20(PANCAN)&removeHub=https%3A%2F%2Fxena.treehouse.gi.ucsc.edu%3A494",
    "Data Link":
      "https://www.cancer.gov/about-nci/organization/ccg/research/structural-genomics/tcga",
    "Number of samples": 444,
    "Number of Identifiers": 258,
    Summary_general: "",
    Summary_Specific:
      "This dataset includes protein expression expression data for TCGA Kidney Clear Cell Carcinoma samples along with their clinical data.",
  },
  {
    Dataset: "TCGA",
    Tissue_code: "COAD",
    Tissue_source: "Colon Adenocarcinoma",
    Tissue_standard: "Colon",
    "Data Type": "protein expression",
    In_prod: "TRUE",
    "Data Source":
      "https://xenabrowser.net/datapages/?cohort=TCGA%20Pan-Cancer%20(PANCAN)&removeHub=https%3A%2F%2Fxena.treehouse.gi.ucsc.edu%3A495",
    "Data Link":
      "https://www.cancer.gov/about-nci/organization/ccg/research/structural-genomics/tcga",
    "Number of samples": 354,
    "Number of Identifiers": 258,
    Summary_general: "",
    Summary_Specific:
      "This dataset includes protein expression expression data for TCGA Colon Adenocarcinoma samples along with their clinical data.",
  },
  {
    Dataset: "TCGA",
    Tissue_code: "READ",
    Tissue_source: "Rectum Adenocarcinoma",
    Tissue_standard: "Rectum",
    "Data Type": "protein expression",
    In_prod: "TRUE",
    "Data Source":
      "https://xenabrowser.net/datapages/?cohort=TCGA%20Pan-Cancer%20(PANCAN)&removeHub=https%3A%2F%2Fxena.treehouse.gi.ucsc.edu%3A496",
    "Data Link":
      "https://www.cancer.gov/about-nci/organization/ccg/research/structural-genomics/tcga",
    "Number of samples": 128,
    "Number of Identifiers": 258,
    Summary_general: "",
    Summary_Specific:
      "This dataset includes protein expression expression data for TCGA Rectum Adenocarcinoma samples along with their clinical data.",
  },
  {
    Dataset: "TCGA",
    Tissue_code: "GBM",
    Tissue_source: "Glioblastoma Multiforme",
    Tissue_standard: "Brain and CNS",
    "Data Type": "protein expression",
    In_prod: "TRUE",
    "Data Source":
      "https://xenabrowser.net/datapages/?cohort=TCGA%20Pan-Cancer%20(PANCAN)&removeHub=https%3A%2F%2Fxena.treehouse.gi.ucsc.edu%3A497",
    "Data Link":
      "https://www.cancer.gov/about-nci/organization/ccg/research/structural-genomics/tcga",
    "Number of samples": 211,
    "Number of Identifiers": 258,
    Summary_general: "",
    Summary_Specific:
      "This dataset includes protein expression expression data for TCGA Glioblastoma Multiforme samples along with their clinical data.",
  },
  {
    Dataset: "TCGA",
    Tissue_code: "THCA",
    Tissue_source: "Thyroid Carcinoma",
    Tissue_standard: "Thyroid",
    "Data Type": "protein expression",
    In_prod: "TRUE",
    "Data Source":
      "https://xenabrowser.net/datapages/?cohort=TCGA%20Pan-Cancer%20(PANCAN)&removeHub=https%3A%2F%2Fxena.treehouse.gi.ucsc.edu%3A498",
    "Data Link":
      "https://www.cancer.gov/about-nci/organization/ccg/research/structural-genomics/tcga",
    "Number of samples": 374,
    "Number of Identifiers": 258,
    Summary_general: "",
    Summary_Specific:
      "This dataset includes protein expression expression data for TCGA Thyroid Carcinoma samples along with their clinical data.",
  },
  {
    Dataset: "TCGA",
    Tissue_code: "KIRP",
    Tissue_source: "Kidney Papillary Cell Carcinoma",
    Tissue_standard: "Kidney",
    "Data Type": "protein expression",
    In_prod: "TRUE",
    "Data Source":
      "https://xenabrowser.net/datapages/?cohort=TCGA%20Pan-Cancer%20(PANCAN)&removeHub=https%3A%2F%2Fxena.treehouse.gi.ucsc.edu%3A499",
    "Data Link":
      "https://www.cancer.gov/about-nci/organization/ccg/research/structural-genomics/tcga",
    "Number of samples": 208,
    "Number of Identifiers": 258,
    Summary_general: "",
    Summary_Specific:
      "This dataset includes protein expression expression data for TCGA Kidney Papillary Cell Carcinoma samples along with their clinical data.",
  },
  {
    Dataset: "TCGA",
    Tissue_code: "PAAD",
    Tissue_source: "Pancreatic Adenocarcinoma",
    Tissue_standard: "Pancreas",
    "Data Type": "protein expression",
    In_prod: "TRUE",
    "Data Source":
      "https://xenabrowser.net/datapages/?cohort=TCGA%20Pan-Cancer%20(PANCAN)&removeHub=https%3A%2F%2Fxena.treehouse.gi.ucsc.edu%3A500",
    "Data Link":
      "https://www.cancer.gov/about-nci/organization/ccg/research/structural-genomics/tcga",
    "Number of samples": 105,
    "Number of Identifiers": 258,
    Summary_general: "",
    Summary_Specific:
      "This dataset includes protein expression expression data for TCGA Pancreatic Adenocarcinoma samples along with their clinical data.",
  },
  {
    Dataset: "TCGA",
    Tissue_code: "SARC",
    Tissue_source: "Sarcoma",
    Tissue_standard: "Bone and Connective Tissue",
    "Data Type": "protein expression",
    In_prod: "TRUE",
    "Data Source":
      "https://xenabrowser.net/datapages/?cohort=TCGA%20Pan-Cancer%20(PANCAN)&removeHub=https%3A%2F%2Fxena.treehouse.gi.ucsc.edu%3A501",
    "Data Link":
      "https://www.cancer.gov/about-nci/organization/ccg/research/structural-genomics/tcga",
    "Number of samples": 224,
    "Number of Identifiers": 258,
    Summary_general: "",
    Summary_Specific:
      "This dataset includes protein expression expression data for TCGA Sarcoma samples along with their clinical data.",
  },
  {
    Dataset: "TCGA",
    Tissue_code: "CESC",
    Tissue_source: "Cervical & Endocervical Cancer",
    Tissue_standard: "Cervix",
    "Data Type": "protein expression",
    In_prod: "TRUE",
    "Data Source":
      "https://xenabrowser.net/datapages/?cohort=TCGA%20Pan-Cancer%20(PANCAN)&removeHub=https%3A%2F%2Fxena.treehouse.gi.ucsc.edu%3A502",
    "Data Link":
      "https://www.cancer.gov/about-nci/organization/ccg/research/structural-genomics/tcga",
    "Number of samples": 171,
    "Number of Identifiers": 258,
    Summary_general: "",
    Summary_Specific:
      "This dataset includes protein expression expression data for TCGA Cervical & Endocervical Cancer samples along with their clinical data.",
  },
  {
    Dataset: "TCGA",
    Tissue_code: "ESCA",
    Tissue_source: "Esophageal Carcinoma",
    Tissue_standard: "Esophagus",
    "Data Type": "protein expression",
    In_prod: "TRUE",
    "Data Source":
      "https://xenabrowser.net/datapages/?cohort=TCGA%20Pan-Cancer%20(PANCAN)&removeHub=https%3A%2F%2Fxena.treehouse.gi.ucsc.edu%3A503",
    "Data Link":
      "https://www.cancer.gov/about-nci/organization/ccg/research/structural-genomics/tcga",
    "Number of samples": 126,
    "Number of Identifiers": 258,
    Summary_general: "",
    Summary_Specific:
      "This dataset includes protein expression expression data for TCGA Esophageal Carcinoma samples along with their clinical data.",
  },
  {
    Dataset: "TCGA",
    Tissue_code: "LIHC",
    Tissue_source: "Liver Hepatocellular Carcinoma",
    Tissue_standard: "Liver",
    "Data Type": "protein expression",
    In_prod: "TRUE",
    "Data Source":
      "https://xenabrowser.net/datapages/?cohort=TCGA%20Pan-Cancer%20(PANCAN)&removeHub=https%3A%2F%2Fxena.treehouse.gi.ucsc.edu%3A504",
    "Data Link":
      "https://www.cancer.gov/about-nci/organization/ccg/research/structural-genomics/tcga",
    "Number of samples": 184,
    "Number of Identifiers": 258,
    Summary_general: "",
    Summary_Specific:
      "This dataset includes protein expression expression data for TCGA Liver Hepatocellular Carcinoma samples along with their clinical data.",
  },
  {
    Dataset: "TCGA",
    Tissue_code: "TGCT",
    Tissue_source: "Testicular Germ Cell Tumor",
    Tissue_standard: "Testes",
    "Data Type": "protein expression",
    In_prod: "TRUE",
    "Data Source":
      "https://xenabrowser.net/datapages/?cohort=TCGA%20Pan-Cancer%20(PANCAN)&removeHub=https%3A%2F%2Fxena.treehouse.gi.ucsc.edu%3A505",
    "Data Link":
      "https://www.cancer.gov/about-nci/organization/ccg/research/structural-genomics/tcga",
    "Number of samples": 107,
    "Number of Identifiers": 258,
    Summary_general: "",
    Summary_Specific:
      "This dataset includes protein expression expression data for TCGA Testicular Germ Cell Tumor samples along with their clinical data.",
  },
  {
    Dataset: "TCGA",
    Tissue_code: "BLCA",
    Tissue_source: "Bladder Urothelial Carcinoma",
    Tissue_standard: "Bladder",
    "Data Type": "protein expression",
    In_prod: "TRUE",
    "Data Source":
      "https://xenabrowser.net/datapages/?cohort=TCGA%20Pan-Cancer%20(PANCAN)&removeHub=https%3A%2F%2Fxena.treehouse.gi.ucsc.edu%3A506",
    "Data Link":
      "https://www.cancer.gov/about-nci/organization/ccg/research/structural-genomics/tcga",
    "Number of samples": 344,
    "Number of Identifiers": 258,
    Summary_general: "",
    Summary_Specific:
      "This dataset includes protein expression expression data for TCGA Bladder Urothelial Carcinoma samples along with their clinical data.",
  },
  {
    Dataset: "TCGA",
    Tissue_code: "BRCA",
    Tissue_source: "Breast Invasive Carcinoma",
    Tissue_standard: "Breast",
    "Data Type": "protein expression",
    In_prod: "TRUE",
    "Data Source":
      "https://xenabrowser.net/datapages/?cohort=TCGA%20Pan-Cancer%20(PANCAN)&removeHub=https%3A%2F%2Fxena.treehouse.gi.ucsc.edu%3A507",
    "Data Link":
      "https://www.cancer.gov/about-nci/organization/ccg/research/structural-genomics/tcga",
    "Number of samples": 878,
    "Number of Identifiers": 258,
    Summary_general: "",
    Summary_Specific:
      "This dataset includes protein expression expression data for TCGA Breast Invasive Carcinoma samples along with their clinical data.",
  },
  {
    Dataset: "TCGA",
    Tissue_code: "HNSC",
    Tissue_source: "Head & Neck Squamous Cell Carcinoma",
    Tissue_standard: "Head and neck",
    "Data Type": "protein expression",
    In_prod: "TRUE",
    "Data Source":
      "https://xenabrowser.net/datapages/?cohort=TCGA%20Pan-Cancer%20(PANCAN)&removeHub=https%3A%2F%2Fxena.treehouse.gi.ucsc.edu%3A508",
    "Data Link":
      "https://www.cancer.gov/about-nci/organization/ccg/research/structural-genomics/tcga",
    "Number of samples": 346,
    "Number of Identifiers": 258,
    Summary_general: "",
    Summary_Specific:
      "This dataset includes protein expression expression data for TCGA Head & Neck Squamous Cell Carcinoma samples along with their clinical data.",
  },
  {
    Dataset: "TCGA",
    Tissue_code: "LGG",
    Tissue_source: "Brain Lower Grade Glioma",
    Tissue_standard: "Brain and CNS",
    "Data Type": "protein expression",
    In_prod: "TRUE",
    "Data Source":
      "https://xenabrowser.net/datapages/?cohort=TCGA%20Pan-Cancer%20(PANCAN)&removeHub=https%3A%2F%2Fxena.treehouse.gi.ucsc.edu%3A509",
    "Data Link":
      "https://www.cancer.gov/about-nci/organization/ccg/research/structural-genomics/tcga",
    "Number of samples": 432,
    "Number of Identifiers": 258,
    Summary_general: "",
    Summary_Specific:
      "This dataset includes protein expression expression data for TCGA Brain Lower Grade Glioma samples along with their clinical data.",
  },
  {
    Dataset: "TCGA",
    Tissue_code: "LUAD",
    Tissue_source: "Lung Adenocarcinoma",
    Tissue_standard: "Lung",
    "Data Type": "protein expression",
    In_prod: "TRUE",
    "Data Source":
      "https://xenabrowser.net/datapages/?cohort=TCGA%20Pan-Cancer%20(PANCAN)&removeHub=https%3A%2F%2Fxena.treehouse.gi.ucsc.edu%3A510",
    "Data Link":
      "https://www.cancer.gov/about-nci/organization/ccg/research/structural-genomics/tcga",
    "Number of samples": 361,
    "Number of Identifiers": 258,
    Summary_general: "",
    Summary_Specific:
      "This dataset includes protein expression expression data for TCGA Lung Adenocarcinoma samples along with their clinical data.",
  },
  {
    Dataset: "TCGA",
    Tissue_code: "LUSC",
    Tissue_source: "Lung Squamous Cell Carcinoma",
    Tissue_standard: "Lung",
    "Data Type": "protein expression",
    In_prod: "TRUE",
    "Data Source":
      "https://xenabrowser.net/datapages/?cohort=TCGA%20Pan-Cancer%20(PANCAN)&removeHub=https%3A%2F%2Fxena.treehouse.gi.ucsc.edu%3A511",
    "Data Link":
      "https://www.cancer.gov/about-nci/organization/ccg/research/structural-genomics/tcga",
    "Number of samples": 325,
    "Number of Identifiers": 258,
    Summary_general: "",
    Summary_Specific:
      "This dataset includes protein expression expression data for TCGA Lung Squamous Cell Carcinoma samples along with their clinical data.",
  },
  {
    Dataset: "TCGA",
    Tissue_code: "PRAD",
    Tissue_source: "Prostate Adenocarcinoma",
    Tissue_standard: "Prostate",
    "Data Type": "protein expression",
    In_prod: "TRUE",
    "Data Source":
      "https://xenabrowser.net/datapages/?cohort=TCGA%20Pan-Cancer%20(PANCAN)&removeHub=https%3A%2F%2Fxena.treehouse.gi.ucsc.edu%3A512",
    "Data Link":
      "https://www.cancer.gov/about-nci/organization/ccg/research/structural-genomics/tcga",
    "Number of samples": 351,
    "Number of Identifiers": 258,
    Summary_general: "",
    Summary_Specific:
      "This dataset includes protein expression expression data for TCGA Prostate Adenocarcinoma samples along with their clinical data.",
  },
  {
    Dataset: "TCGA",
    Tissue_code: "SKCM",
    Tissue_source: "Skin Cutaneous Melanoma",
    Tissue_standard: "Skin",
    "Data Type": "protein expression",
    In_prod: "TRUE",
    "Data Source":
      "https://xenabrowser.net/datapages/?cohort=TCGA%20Pan-Cancer%20(PANCAN)&removeHub=https%3A%2F%2Fxena.treehouse.gi.ucsc.edu%3A513",
    "Data Link":
      "https://www.cancer.gov/about-nci/organization/ccg/research/structural-genomics/tcga",
    "Number of samples": 353,
    "Number of Identifiers": 258,
    Summary_general: "",
    Summary_Specific:
      "This dataset includes protein expression expression data for TCGA Skin Cutaneous Melanoma samples along with their clinical data.",
  },
  {
    Dataset: "TCGA",
    Tissue_code: "STAD",
    Tissue_source: "Stomach Adenocarcinoma",
    Tissue_standard: "Stomach",
    "Data Type": "protein expression",
    In_prod: "TRUE",
    "Data Source":
      "https://xenabrowser.net/datapages/?cohort=TCGA%20Pan-Cancer%20(PANCAN)&removeHub=https%3A%2F%2Fxena.treehouse.gi.ucsc.edu%3A514",
    "Data Link":
      "https://www.cancer.gov/about-nci/organization/ccg/research/structural-genomics/tcga",
    "Number of samples": 357,
    "Number of Identifiers": 258,
    Summary_general: "",
    Summary_Specific:
      "This dataset includes protein expression expression data for TCGA Stomach Adenocarcinoma samples along with their clinical data.",
  },
  {
    Dataset: "TCGA",
    Tissue_code: "UCEC",
    Tissue_source: "Uterine Corpus Endometrioid Carcinoma",
    Tissue_standard: "Uterus",
    "Data Type": "copy number variants",
    In_prod: "TRUE",
    "Data Source":
      "https://xenabrowser.net/datapages/?cohort=TCGA%20Pan-Cancer%20(PANCAN)&removeHub=https%3A%2F%2Fxena.treehouse.gi.ucsc.edu%3A515",
    "Data Link":
      "https://www.cancer.gov/about-nci/organization/ccg/research/structural-genomics/tcga",
    "Number of samples": 539,
    "Number of Identifiers": "24,776",
    Summary_general: "",
    Summary_Specific:
      "This dataset includes copy number variants data for TCGA Uterine Corpus Endometrioid Carcinoma samples along with their clinical data.",
  },
  {
    Dataset: "TCGA",
    Tissue_code: "LGG",
    Tissue_source: "Brain Lower Grade Glioma",
    Tissue_standard: "Brain and CNS",
    "Data Type": "copy number variants",
    In_prod: "TRUE",
    "Data Source":
      "https://xenabrowser.net/datapages/?cohort=TCGA%20Pan-Cancer%20(PANCAN)&removeHub=https%3A%2F%2Fxena.treehouse.gi.ucsc.edu%3A516",
    "Data Link":
      "https://www.cancer.gov/about-nci/organization/ccg/research/structural-genomics/tcga",
    "Number of samples": 512,
    "Number of Identifiers": "24,776",
    Summary_general: "",
    Summary_Specific:
      "This dataset includes copy number variants data for TCGA Brain Lower Grade Glioma samples along with their clinical data.",
  },
  {
    Dataset: "TCGA",
    Tissue_code: "GBM",
    Tissue_source: "Glioblastoma Multiforme",
    Tissue_standard: "Brain and CNS",
    "Data Type": "copy number variants",
    In_prod: "TRUE",
    "Data Source":
      "https://xenabrowser.net/datapages/?cohort=TCGA%20Pan-Cancer%20(PANCAN)&removeHub=https%3A%2F%2Fxena.treehouse.gi.ucsc.edu%3A517",
    "Data Link":
      "https://www.cancer.gov/about-nci/organization/ccg/research/structural-genomics/tcga",
    "Number of samples": 573,
    "Number of Identifiers": "24,776",
    Summary_general: "",
    Summary_Specific:
      "This dataset includes copy number variants data for TCGA Glioblastoma Multiforme samples along with their clinical data.",
  },
  {
    Dataset: "TCGA",
    Tissue_code: "BRCA",
    Tissue_source: "Breast Invasive Carcinoma",
    Tissue_standard: "Breast",
    "Data Type": "copy number variants",
    In_prod: "TRUE",
    "Data Source":
      "https://xenabrowser.net/datapages/?cohort=TCGA%20Pan-Cancer%20(PANCAN)&removeHub=https%3A%2F%2Fxena.treehouse.gi.ucsc.edu%3A518",
    "Data Link":
      "https://www.cancer.gov/about-nci/organization/ccg/research/structural-genomics/tcga",
    "Number of samples": 1079,
    "Number of Identifiers": "24,776",
    Summary_general: "",
    Summary_Specific:
      "This dataset includes copy number variants data for TCGA Breast Invasive Carcinoma samples along with their clinical data.",
  },
  {
    Dataset: "TCGA",
    Tissue_code: "CESC",
    Tissue_source: "Cervical & Endocervical Cancer",
    Tissue_standard: "Cervix",
    "Data Type": "copy number variants",
    In_prod: "TRUE",
    "Data Source":
      "https://xenabrowser.net/datapages/?cohort=TCGA%20Pan-Cancer%20(PANCAN)&removeHub=https%3A%2F%2Fxena.treehouse.gi.ucsc.edu%3A519",
    "Data Link":
      "https://www.cancer.gov/about-nci/organization/ccg/research/structural-genomics/tcga",
    "Number of samples": 295,
    "Number of Identifiers": "24,776",
    Summary_general: "",
    Summary_Specific:
      "This dataset includes copy number variants data for TCGA Cervical & Endocervical Cancer samples along with their clinical data.",
  },
  {
    Dataset: "TCGA",
    Tissue_code: "LUAD",
    Tissue_source: "Lung Adenocarcinoma",
    Tissue_standard: "Lung",
    "Data Type": "copy number variants",
    In_prod: "TRUE",
    "Data Source":
      "https://xenabrowser.net/datapages/?cohort=TCGA%20Pan-Cancer%20(PANCAN)&removeHub=https%3A%2F%2Fxena.treehouse.gi.ucsc.edu%3A520",
    "Data Link":
      "https://www.cancer.gov/about-nci/organization/ccg/research/structural-genomics/tcga",
    "Number of samples": 516,
    "Number of Identifiers": "24,776",
    Summary_general: "",
    Summary_Specific:
      "This dataset includes copy number variants data for TCGA Lung Adenocarcinoma samples along with their clinical data.",
  },
  {
    Dataset: "TCGA",
    Tissue_code: "SKCM",
    Tissue_source: "Skin Cutaneous Melanoma",
    Tissue_standard: "Skin",
    "Data Type": "copy number variants",
    In_prod: "TRUE",
    "Data Source":
      "https://xenabrowser.net/datapages/?cohort=TCGA%20Pan-Cancer%20(PANCAN)&removeHub=https%3A%2F%2Fxena.treehouse.gi.ucsc.edu%3A521",
    "Data Link":
      "https://www.cancer.gov/about-nci/organization/ccg/research/structural-genomics/tcga",
    "Number of samples": 367,
    "Number of Identifiers": "24,776",
    Summary_general: "",
    Summary_Specific:
      "This dataset includes copy number variants data for TCGA Skin Cutaneous Melanoma samples along with their clinical data.",
  },
  {
    Dataset: "TCGA",
    Tissue_code: "ESCA",
    Tissue_source: "Esophageal Carcinoma",
    Tissue_standard: "Esophagus",
    "Data Type": "copy number variants",
    In_prod: "TRUE",
    "Data Source":
      "https://xenabrowser.net/datapages/?cohort=TCGA%20Pan-Cancer%20(PANCAN)&removeHub=https%3A%2F%2Fxena.treehouse.gi.ucsc.edu%3A522",
    "Data Link":
      "https://www.cancer.gov/about-nci/organization/ccg/research/structural-genomics/tcga",
    "Number of samples": 184,
    "Number of Identifiers": "24,776",
    Summary_general: "",
    Summary_Specific:
      "This dataset includes copy number variants data for TCGA Esophageal Carcinoma samples along with their clinical data.",
  },
  {
    Dataset: "TCGA",
    Tissue_code: "SARC",
    Tissue_source: "Sarcoma",
    Tissue_standard: "Bone and Connective Tissue",
    "Data Type": "copy number variants",
    In_prod: "TRUE",
    "Data Source":
      "https://xenabrowser.net/datapages/?cohort=TCGA%20Pan-Cancer%20(PANCAN)&removeHub=https%3A%2F%2Fxena.treehouse.gi.ucsc.edu%3A523",
    "Data Link":
      "https://www.cancer.gov/about-nci/organization/ccg/research/structural-genomics/tcga",
    "Number of samples": 257,
    "Number of Identifiers": "24,776",
    Summary_general: "",
    Summary_Specific:
      "This dataset includes copy number variants data for TCGA Sarcoma samples along with their clinical data.",
  },
  {
    Dataset: "TCGA",
    Tissue_code: "KIRP",
    Tissue_source: "Kidney Papillary Cell Carcinoma",
    Tissue_standard: "Kidney",
    "Data Type": "copy number variants",
    In_prod: "TRUE",
    "Data Source":
      "https://xenabrowser.net/datapages/?cohort=TCGA%20Pan-Cancer%20(PANCAN)&removeHub=https%3A%2F%2Fxena.treehouse.gi.ucsc.edu%3A524",
    "Data Link":
      "https://www.cancer.gov/about-nci/organization/ccg/research/structural-genomics/tcga",
    "Number of samples": 288,
    "Number of Identifiers": "24,776",
    Summary_general: "",
    Summary_Specific:
      "This dataset includes copy number variants data for TCGA Kidney Papillary Cell Carcinoma samples along with their clinical data.",
  },
  {
    Dataset: "TCGA",
    Tissue_code: "LIHC",
    Tissue_source: "Liver Hepatocellular Carcinoma",
    Tissue_standard: "Liver",
    "Data Type": "copy number variants",
    In_prod: "TRUE",
    "Data Source":
      "https://xenabrowser.net/datapages/?cohort=TCGA%20Pan-Cancer%20(PANCAN)&removeHub=https%3A%2F%2Fxena.treehouse.gi.ucsc.edu%3A525",
    "Data Link":
      "https://www.cancer.gov/about-nci/organization/ccg/research/structural-genomics/tcga",
    "Number of samples": 370,
    "Number of Identifiers": "24,776",
    Summary_general: "",
    Summary_Specific:
      "This dataset includes copy number variants data for TCGA Liver Hepatocellular Carcinoma samples along with their clinical data.",
  },
  {
    Dataset: "TCGA",
    Tissue_code: "PRAD",
    Tissue_source: "Prostate Adenocarcinoma",
    Tissue_standard: "Prostate",
    "Data Type": "copy number variants",
    In_prod: "TRUE",
    "Data Source":
      "https://xenabrowser.net/datapages/?cohort=TCGA%20Pan-Cancer%20(PANCAN)&removeHub=https%3A%2F%2Fxena.treehouse.gi.ucsc.edu%3A526",
    "Data Link":
      "https://www.cancer.gov/about-nci/organization/ccg/research/structural-genomics/tcga",
    "Number of samples": 492,
    "Number of Identifiers": "24,776",
    Summary_general: "",
    Summary_Specific:
      "This dataset includes copy number variants data for TCGA Prostate Adenocarcinoma samples along with their clinical data.",
  },
  {
    Dataset: "TCGA",
    Tissue_code: "STAD",
    Tissue_source: "Stomach Adenocarcinoma",
    Tissue_standard: "Stomach",
    "Data Type": "copy number variants",
    In_prod: "TRUE",
    "Data Source":
      "https://xenabrowser.net/datapages/?cohort=TCGA%20Pan-Cancer%20(PANCAN)&removeHub=https%3A%2F%2Fxena.treehouse.gi.ucsc.edu%3A527",
    "Data Link":
      "https://www.cancer.gov/about-nci/organization/ccg/research/structural-genomics/tcga",
    "Number of samples": 441,
    "Number of Identifiers": "24,776",
    Summary_general: "",
    Summary_Specific:
      "This dataset includes copy number variants data for TCGA Stomach Adenocarcinoma samples along with their clinical data.",
  },
  {
    Dataset: "TCGA",
    Tissue_code: "LAML",
    Tissue_source: "Acute Myeloid Leukemia",
    Tissue_standard: "Blood and Lymph",
    "Data Type": "copy number variants",
    In_prod: "TRUE",
    "Data Source":
      "https://xenabrowser.net/datapages/?cohort=TCGA%20Pan-Cancer%20(PANCAN)&removeHub=https%3A%2F%2Fxena.treehouse.gi.ucsc.edu%3A528",
    "Data Link":
      "https://www.cancer.gov/about-nci/organization/ccg/research/structural-genomics/tcga",
    "Number of samples": 191,
    "Number of Identifiers": "24,776",
    Summary_general: "",
    Summary_Specific:
      "This dataset includes copy number variants data for TCGA Acute Myeloid Leukemia samples along with their clinical data.",
  },
  {
    Dataset: "TCGA",
    Tissue_code: "HNSC",
    Tissue_source: "Head & Neck Squamous Cell Carcinoma",
    Tissue_standard: "Head and neck",
    "Data Type": "copy number variants",
    In_prod: "TRUE",
    "Data Source":
      "https://xenabrowser.net/datapages/?cohort=TCGA%20Pan-Cancer%20(PANCAN)&removeHub=https%3A%2F%2Fxena.treehouse.gi.ucsc.edu%3A529",
    "Data Link":
      "https://www.cancer.gov/about-nci/organization/ccg/research/structural-genomics/tcga",
    "Number of samples": 522,
    "Number of Identifiers": "24,776",
    Summary_general: "",
    Summary_Specific:
      "This dataset includes copy number variants data for TCGA Head & Neck Squamous Cell Carcinoma samples along with their clinical data.",
  },
  {
    Dataset: "TCGA",
    Tissue_code: "KIRC",
    Tissue_source: "Kidney Clear Cell Carcinoma",
    Tissue_standard: "Kidney",
    "Data Type": "copy number variants",
    In_prod: "TRUE",
    "Data Source":
      "https://xenabrowser.net/datapages/?cohort=TCGA%20Pan-Cancer%20(PANCAN)&removeHub=https%3A%2F%2Fxena.treehouse.gi.ucsc.edu%3A530",
    "Data Link":
      "https://www.cancer.gov/about-nci/organization/ccg/research/structural-genomics/tcga",
    "Number of samples": 528,
    "Number of Identifiers": "24,776",
    Summary_general: "",
    Summary_Specific:
      "This dataset includes copy number variants data for TCGA Kidney Clear Cell Carcinoma samples along with their clinical data.",
  },
  {
    Dataset: "TCGA",
    Tissue_code: "THYM",
    Tissue_source: "Thymoma",
    Tissue_standard: "Thymus",
    "Data Type": "copy number variants",
    In_prod: "TRUE",
    "Data Source":
      "https://xenabrowser.net/datapages/?cohort=TCGA%20Pan-Cancer%20(PANCAN)&removeHub=https%3A%2F%2Fxena.treehouse.gi.ucsc.edu%3A531",
    "Data Link":
      "https://www.cancer.gov/about-nci/organization/ccg/research/structural-genomics/tcga",
    "Number of samples": 123,
    "Number of Identifiers": "24,776",
    Summary_general: "",
    Summary_Specific:
      "This dataset includes copy number variants data for TCGA Thymoma samples along with their clinical data.",
  },
  {
    Dataset: "TCGA",
    Tissue_code: "READ",
    Tissue_source: "Rectum Adenocarcinoma",
    Tissue_standard: "Rectum",
    "Data Type": "copy number variants",
    In_prod: "TRUE",
    "Data Source":
      "https://xenabrowser.net/datapages/?cohort=TCGA%20Pan-Cancer%20(PANCAN)&removeHub=https%3A%2F%2Fxena.treehouse.gi.ucsc.edu%3A532",
    "Data Link":
      "https://www.cancer.gov/about-nci/organization/ccg/research/structural-genomics/tcga",
    "Number of samples": 164,
    "Number of Identifiers": "24,776",
    Summary_general: "",
    Summary_Specific:
      "This dataset includes copy number variants data for TCGA Rectum Adenocarcinoma samples along with their clinical data.",
  },
  {
    Dataset: "TCGA",
    Tissue_code: "COAD",
    Tissue_source: "Colon Adenocarcinoma",
    Tissue_standard: "Colon",
    "Data Type": "copy number variants",
    In_prod: "TRUE",
    "Data Source":
      "https://xenabrowser.net/datapages/?cohort=TCGA%20Pan-Cancer%20(PANCAN)&removeHub=https%3A%2F%2Fxena.treehouse.gi.ucsc.edu%3A533",
    "Data Link":
      "https://www.cancer.gov/about-nci/organization/ccg/research/structural-genomics/tcga",
    "Number of samples": 449,
    "Number of Identifiers": "24,776",
    Summary_general: "",
    Summary_Specific:
      "This dataset includes copy number variants data for TCGA Colon Adenocarcinoma samples along with their clinical data.",
  },
  {
    Dataset: "TCGA",
    Tissue_code: "LUSC",
    Tissue_source: "Lung Squamous Cell Carcinoma",
    Tissue_standard: "Lung",
    "Data Type": "copy number variants",
    In_prod: "TRUE",
    "Data Source":
      "https://xenabrowser.net/datapages/?cohort=TCGA%20Pan-Cancer%20(PANCAN)&removeHub=https%3A%2F%2Fxena.treehouse.gi.ucsc.edu%3A534",
    "Data Link":
      "https://www.cancer.gov/about-nci/organization/ccg/research/structural-genomics/tcga",
    "Number of samples": 501,
    "Number of Identifiers": "24,776",
    Summary_general: "",
    Summary_Specific:
      "This dataset includes copy number variants data for TCGA Lung Squamous Cell Carcinoma samples along with their clinical data.",
  },
  {
    Dataset: "TCGA",
    Tissue_code: "THCA",
    Tissue_source: "Thyroid Carcinoma",
    Tissue_standard: "Thyroid",
    "Data Type": "copy number variants",
    In_prod: "TRUE",
    "Data Source":
      "https://xenabrowser.net/datapages/?cohort=TCGA%20Pan-Cancer%20(PANCAN)&removeHub=https%3A%2F%2Fxena.treehouse.gi.ucsc.edu%3A535",
    "Data Link":
      "https://www.cancer.gov/about-nci/organization/ccg/research/structural-genomics/tcga",
    "Number of samples": 499,
    "Number of Identifiers": "24,776",
    Summary_general: "",
    Summary_Specific:
      "This dataset includes copy number variants data for TCGA Thyroid Carcinoma samples along with their clinical data.",
  },
  {
    Dataset: "TCGA",
    Tissue_code: "PAAD",
    Tissue_source: "Pancreatic Adenocarcinoma",
    Tissue_standard: "Pancreas",
    "Data Type": "copy number variants",
    In_prod: "TRUE",
    "Data Source":
      "https://xenabrowser.net/datapages/?cohort=TCGA%20Pan-Cancer%20(PANCAN)&removeHub=https%3A%2F%2Fxena.treehouse.gi.ucsc.edu%3A536",
    "Data Link":
      "https://www.cancer.gov/about-nci/organization/ccg/research/structural-genomics/tcga",
    "Number of samples": 184,
    "Number of Identifiers": "24,776",
    Summary_general: "",
    Summary_Specific:
      "This dataset includes copy number variants data for TCGA Pancreatic Adenocarcinoma samples along with their clinical data.",
  },
  {
    Dataset: "TCGA",
    Tissue_code: "OV",
    Tissue_source: "Ovarian Serous Cystadenocarcinoma",
    Tissue_standard: "Ovary",
    "Data Type": "copy number variants",
    In_prod: "TRUE",
    "Data Source":
      "https://xenabrowser.net/datapages/?cohort=TCGA%20Pan-Cancer%20(PANCAN)&removeHub=https%3A%2F%2Fxena.treehouse.gi.ucsc.edu%3A537",
    "Data Link":
      "https://www.cancer.gov/about-nci/organization/ccg/research/structural-genomics/tcga",
    "Number of samples": 568,
    "Number of Identifiers": "24,776",
    Summary_general: "",
    Summary_Specific:
      "This dataset includes copy number variants data for TCGA Ovarian Serous Cystadenocarcinoma samples along with their clinical data.",
  },
  {
    Dataset: "TCGA",
    Tissue_code: "TGCT",
    Tissue_source: "Testicular Germ Cell Tumor",
    Tissue_standard: "Testes",
    "Data Type": "copy number variants",
    In_prod: "TRUE",
    "Data Source":
      "https://xenabrowser.net/datapages/?cohort=TCGA%20Pan-Cancer%20(PANCAN)&removeHub=https%3A%2F%2Fxena.treehouse.gi.ucsc.edu%3A538",
    "Data Link":
      "https://www.cancer.gov/about-nci/organization/ccg/research/structural-genomics/tcga",
    "Number of samples": 134,
    "Number of Identifiers": "24,776",
    Summary_general: "",
    Summary_Specific:
      "This dataset includes copy number variants data for TCGA Testicular Germ Cell Tumor samples along with their clinical data.",
  },
  {
    Dataset: "TCGA",
    Tissue_code: "PCPG",
    Tissue_source: "Pheochromocytoma & Paraganglioma",
    Tissue_standard: "Neuroendocrine",
    "Data Type": "copy number variants",
    In_prod: "TRUE",
    "Data Source":
      "https://xenabrowser.net/datapages/?cohort=TCGA%20Pan-Cancer%20(PANCAN)&removeHub=https%3A%2F%2Fxena.treehouse.gi.ucsc.edu%3A539",
    "Data Link":
      "https://www.cancer.gov/about-nci/organization/ccg/research/structural-genomics/tcga",
    "Number of samples": 162,
    "Number of Identifiers": "24,776",
    Summary_general: "",
    Summary_Specific:
      "This dataset includes copy number variants data for TCGA Pheochromocytoma & Paraganglioma samples along with their clinical data.",
  },
  {
    Dataset: "TCGA",
    Tissue_code: "BLCA",
    Tissue_source: "Bladder Urothelial Carcinoma",
    Tissue_standard: "Bladder",
    "Data Type": "copy number variants",
    In_prod: "TRUE",
    "Data Source":
      "https://xenabrowser.net/datapages/?cohort=TCGA%20Pan-Cancer%20(PANCAN)&removeHub=https%3A%2F%2Fxena.treehouse.gi.ucsc.edu%3A540",
    "Data Link":
      "https://www.cancer.gov/about-nci/organization/ccg/research/structural-genomics/tcga",
    "Number of samples": 408,
    "Number of Identifiers": "24,776",
    Summary_general: "",
    Summary_Specific:
      "This dataset includes copy number variants data for TCGA Bladder Urothelial Carcinoma samples along with their clinical data.",
  },
  {
    Dataset: "ICGC",
    Tissue_code: "",
    Tissue_source: "Breast cancer : Ductal & lobular",
    Tissue_standard: "Breast",
    "Data Type": "mRNA expression",
    In_prod: "TRUE",
    "Data Source":
      "https://xenabrowser.net/datapages/?cohort=ICGC%20(donor%20centric)&removeHub=https%3A%2F%2Fxena.treehouse.gi.ucsc.edu%3A443",
    "Data Link": "https://dcc.icgc.org/",
    "Number of samples": 1041,
    "Number of Identifiers": 20501,
    Summary_general:
      "International Cancer Genome Consortium maps the genetics and transcriptomic signature of 50 different tumor types to identify key components that might be affecting the pathogenesis of cancer",
    Summary_Specific:
      "This dataset includes mRNA expression data for ICGC Breast cancer : Ductal & lobular samples along with their clinical data.",
  },
  {
    Dataset: "ICGC",
    Tissue_code: "",
    Tissue_source: "Renal cancer : Clear cell carcinoma",
    Tissue_standard: "Kidney",
    "Data Type": "mRNA expression",
    In_prod: "TRUE",
    "Data Source":
      "https://xenabrowser.net/datapages/?cohort=ICGC%20(donor%20centric)&removeHub=https%3A%2F%2Fxena.treehouse.gi.ucsc.edu%3A444",
    "Data Link": "https://dcc.icgc.org/",
    "Number of samples": 518,
    "Number of Identifiers": 20501,
    Summary_general: "",
    Summary_Specific:
      "This dataset includes mRNA expression data for ICGC Renal cancer : Clear cell carcinoma samples along with their clinical data.",
  },
  {
    Dataset: "ICGC",
    Tissue_code: "",
    Tissue_source: "Endometrial cancer : Uterine corpus endometrial carcinoma",
    Tissue_standard: "Uterus",
    "Data Type": "mRNA expression",
    In_prod: "TRUE",
    "Data Source":
      "https://xenabrowser.net/datapages/?cohort=ICGC%20(donor%20centric)&removeHub=https%3A%2F%2Fxena.treehouse.gi.ucsc.edu%3A445",
    "Data Link": "https://dcc.icgc.org/",
    "Number of samples": 508,
    "Number of Identifiers": 20501,
    Summary_general: "",
    Summary_Specific:
      "This dataset includes mRNA expression data for ICGC Endometrial cancer : Uterine corpus endometrial carcinoma samples along with their clinical data.",
  },
  {
    Dataset: "ICGC",
    Tissue_code: "",
    Tissue_source: "Head and Neck cancer : Thyroid Carcinoma",
    Tissue_standard: "Thyroid",
    "Data Type": "mRNA expression",
    In_prod: "TRUE",
    "Data Source":
      "https://xenabrowser.net/datapages/?cohort=ICGC%20(donor%20centric)&removeHub=https%3A%2F%2Fxena.treehouse.gi.ucsc.edu%3A446",
    "Data Link": "https://dcc.icgc.org/",
    "Number of samples": 500,
    "Number of Identifiers": 20501,
    Summary_general: "",
    Summary_Specific:
      "This dataset includes mRNA expression data for ICGC Head and Neck cancer : Thyroid Carcinoma samples along with their clinical data.",
  },
  {
    Dataset: "ICGC",
    Tissue_code: "",
    Tissue_source: "Head and Neck cancer : Squamous cell carcinoma",
    Tissue_standard: "Head and neck",
    "Data Type": "mRNA expression",
    In_prod: "TRUE",
    "Data Source":
      "https://xenabrowser.net/datapages/?cohort=ICGC%20(donor%20centric)&removeHub=https%3A%2F%2Fxena.treehouse.gi.ucsc.edu%3A447",
    "Data Link": "https://dcc.icgc.org/",
    "Number of samples": 481,
    "Number of Identifiers": 20501,
    Summary_general: "",
    Summary_Specific:
      "This dataset includes mRNA expression data for ICGC Head and Neck cancer : Squamous cell carcinoma samples along with their clinical data.",
  },
  {
    Dataset: "ICGC",
    Tissue_code: "",
    Tissue_source: "Lung cancer : Adenocarcinoma",
    Tissue_standard: "Lung",
    "Data Type": "mRNA expression",
    In_prod: "TRUE",
    "Data Source":
      "https://xenabrowser.net/datapages/?cohort=ICGC%20(donor%20centric)&removeHub=https%3A%2F%2Fxena.treehouse.gi.ucsc.edu%3A448",
    "Data Link": "https://dcc.icgc.org/",
    "Number of samples": 478,
    "Number of Identifiers": 20501,
    Summary_general: "",
    Summary_Specific:
      "This dataset includes mRNA expression data for ICGC Lung cancer : Adenocarcinoma samples along with their clinical data.",
  },
  {
    Dataset: "ICGC",
    Tissue_code: "",
    Tissue_source: "Brain cancer : Lower grade glioma",
    Tissue_standard: "Brain and CNS",
    "Data Type": "mRNA expression",
    In_prod: "TRUE",
    "Data Source":
      "https://xenabrowser.net/datapages/?cohort=ICGC%20(donor%20centric)&removeHub=https%3A%2F%2Fxena.treehouse.gi.ucsc.edu%3A449",
    "Data Link": "https://dcc.icgc.org/",
    "Number of samples": 439,
    "Number of Identifiers": 20501,
    Summary_general: "",
    Summary_Specific:
      "This dataset includes mRNA expression data for ICGC Brain cancer : Lower grade glioma samples along with their clinical data.",
  },
  {
    Dataset: "ICGC",
    Tissue_code: "",
    Tissue_source: "Skin cancer : Cutaneous melanoma",
    Tissue_standard: "Skin",
    "Data Type": "mRNA expression",
    In_prod: "TRUE",
    "Data Source":
      "https://xenabrowser.net/datapages/?cohort=ICGC%20(donor%20centric)&removeHub=https%3A%2F%2Fxena.treehouse.gi.ucsc.edu%3A450",
    "Data Link": "https://dcc.icgc.org/",
    "Number of samples": 430,
    "Number of Identifiers": 20501,
    Summary_general: "",
    Summary_Specific:
      "This dataset includes mRNA expression data for ICGC Skin cancer : Cutaneous melanoma samples along with their clinical data.",
  },
  {
    Dataset: "ICGC",
    Tissue_code: "",
    Tissue_source: "Lung cancer : Squamous cell carcinoma",
    Tissue_standard: "Lung",
    "Data Type": "mRNA expression",
    In_prod: "TRUE",
    "Data Source":
      "https://xenabrowser.net/datapages/?cohort=ICGC%20(donor%20centric)&removeHub=https%3A%2F%2Fxena.treehouse.gi.ucsc.edu%3A451",
    "Data Link": "https://dcc.icgc.org/",
    "Number of samples": 428,
    "Number of Identifiers": 20501,
    Summary_general: "",
    Summary_Specific:
      "This dataset includes mRNA expression data for ICGC Lung cancer : Squamous cell carcinoma samples along with their clinical data.",
  },
  {
    Dataset: "ICGC",
    Tissue_code: "",
    Tissue_source: "Colon cancer : Adenocarcinoma",
    Tissue_standard: "Colon",
    "Data Type": "mRNA expression",
    In_prod: "TRUE",
    "Data Source":
      "https://xenabrowser.net/datapages/?cohort=ICGC%20(donor%20centric)&removeHub=https%3A%2F%2Fxena.treehouse.gi.ucsc.edu%3A452",
    "Data Link": "https://dcc.icgc.org/",
    "Number of samples": 428,
    "Number of Identifiers": 20501,
    Summary_general: "",
    Summary_Specific:
      "This dataset includes mRNA expression data for ICGC Colon cancer : Adenocarcinoma samples along with their clinical data.",
  },
  {
    Dataset: "ICGC",
    Tissue_code: "",
    Tissue_source: "Gastric cancer : Adenocarcinoma",
    Tissue_standard: "Stomach",
    "Data Type": "mRNA expression",
    In_prod: "TRUE",
    "Data Source":
      "https://xenabrowser.net/datapages/?cohort=ICGC%20(donor%20centric)&removeHub=https%3A%2F%2Fxena.treehouse.gi.ucsc.edu%3A453",
    "Data Link": "https://dcc.icgc.org/",
    "Number of samples": 418,
    "Number of Identifiers": 20501,
    Summary_general: "",
    Summary_Specific:
      "This dataset includes mRNA expression data for ICGC Gastric cancer : Adenocarcinoma samples along with their clinical data.",
  },
  {
    Dataset: "ICGC",
    Tissue_code: "",
    Tissue_source: "Prostate cancer : Adenocarcinoma",
    Tissue_standard: "Prostate",
    "Data Type": "mRNA expression",
    In_prod: "TRUE",
    "Data Source":
      "https://xenabrowser.net/datapages/?cohort=ICGC%20(donor%20centric)&removeHub=https%3A%2F%2Fxena.treehouse.gi.ucsc.edu%3A454",
    "Data Link": "https://dcc.icgc.org/",
    "Number of samples": 375,
    "Number of Identifiers": 20501,
    Summary_general: "",
    Summary_Specific:
      "This dataset includes mRNA expression data for ICGC Prostate cancer : Adenocarcinoma samples along with their clinical data.",
  },
  {
    Dataset: "ICGC",
    Tissue_code: "",
    Tissue_source: "Bladder cancer : Invasive Urothelial Bladder cancer",
    Tissue_standard: "Bladder",
    "Data Type": "mRNA expression",
    In_prod: "TRUE",
    "Data Source":
      "https://xenabrowser.net/datapages/?cohort=ICGC%20(donor%20centric)&removeHub=https%3A%2F%2Fxena.treehouse.gi.ucsc.edu%3A455",
    "Data Link": "https://dcc.icgc.org/",
    "Number of samples": 295,
    "Number of Identifiers": 20501,
    Summary_general: "",
    Summary_Specific:
      "This dataset includes mRNA expression data for ICGC Bladder cancer : Invasive Urothelial Bladder cancer samples along with their clinical data.",
  },
  {
    Dataset: "ICGC",
    Tissue_code: "",
    Tissue_source: "Liver cancer : Hepatocellular carcinoma",
    Tissue_standard: "Liver",
    "Data Type": "mRNA expression",
    In_prod: "TRUE",
    "Data Source":
      "https://xenabrowser.net/datapages/?cohort=ICGC%20(donor%20centric)&removeHub=https%3A%2F%2Fxena.treehouse.gi.ucsc.edu%3A456",
    "Data Link": "https://dcc.icgc.org/",
    "Number of samples": 294,
    "Number of Identifiers": 20501,
    Summary_general: "",
    Summary_Specific:
      "This dataset includes mRNA expression data for ICGC Liver cancer : Hepatocellular carcinoma samples along with their clinical data.",
  },
  {
    Dataset: "ICGC",
    Tissue_code: "",
    Tissue_source: "Ovarian cancer : Serous cystadenocarcinoma",
    Tissue_standard: "Ovary",
    "Data Type": "mRNA expression",
    In_prod: "TRUE",
    "Data Source":
      "https://xenabrowser.net/datapages/?cohort=ICGC%20(donor%20centric)&removeHub=https%3A%2F%2Fxena.treehouse.gi.ucsc.edu%3A457",
    "Data Link": "https://dcc.icgc.org/",
    "Number of samples": 262,
    "Number of Identifiers": 20501,
    Summary_general: "",
    Summary_Specific:
      "This dataset includes mRNA expression data for ICGC Ovarian cancer : Serous cystadenocarcinoma samples along with their clinical data.",
  },
  {
    Dataset: "ICGC",
    Tissue_code: "",
    Tissue_source: "Cervical cancer : Cervical squamous cell carcinoma",
    Tissue_standard: "Cervix",
    "Data Type": "mRNA expression",
    In_prod: "TRUE",
    "Data Source":
      "https://xenabrowser.net/datapages/?cohort=ICGC%20(donor%20centric)&removeHub=https%3A%2F%2Fxena.treehouse.gi.ucsc.edu%3A458",
    "Data Link": "https://dcc.icgc.org/",
    "Number of samples": 259,
    "Number of Identifiers": 20501,
    Summary_general: "",
    Summary_Specific:
      "This dataset includes mRNA expression data for ICGC Cervical cancer : Cervical squamous cell carcinoma samples along with their clinical data.",
  },
  {
    Dataset: "ICGC",
    Tissue_code: "",
    Tissue_source: "Renal cancer : Papillary carcinoma",
    Tissue_standard: "Kidney",
    "Data Type": "mRNA expression",
    In_prod: "TRUE",
    "Data Source":
      "https://xenabrowser.net/datapages/?cohort=ICGC%20(donor%20centric)&removeHub=https%3A%2F%2Fxena.treehouse.gi.ucsc.edu%3A459",
    "Data Link": "https://dcc.icgc.org/",
    "Number of samples": 222,
    "Number of Identifiers": 20501,
    Summary_general: "",
    Summary_Specific:
      "This dataset includes mRNA expression data for ICGC Renal cancer : Papillary carcinoma samples along with their clinical data.",
  },
  {
    Dataset: "ICGC",
    Tissue_code: "",
    Tissue_source: "Blood cancer : Acute Myeloid Leukemia",
    Tissue_standard: "Blood and Lymph",
    "Data Type": "mRNA expression",
    In_prod: "TRUE",
    "Data Source":
      "https://xenabrowser.net/datapages/?cohort=ICGC%20(donor%20centric)&removeHub=https%3A%2F%2Fxena.treehouse.gi.ucsc.edu%3A460",
    "Data Link": "https://dcc.icgc.org/",
    "Number of samples": 173,
    "Number of Identifiers": 20501,
    Summary_general: "",
    Summary_Specific:
      "This dataset includes mRNA expression data for ICGC Blood cancer : Acute Myeloid Leukemia samples along with their clinical data.",
  },
  {
    Dataset: "ICGC",
    Tissue_code: "",
    Tissue_source: "Brain cancer : Glioblastoma Multiforme",
    Tissue_standard: "Brain and CNS",
    "Data Type": "mRNA expression",
    In_prod: "TRUE",
    "Data Source":
      "https://xenabrowser.net/datapages/?cohort=ICGC%20(donor%20centric)&removeHub=https%3A%2F%2Fxena.treehouse.gi.ucsc.edu%3A461",
    "Data Link": "https://dcc.icgc.org/",
    "Number of samples": 159,
    "Number of Identifiers": 20501,
    Summary_general: "",
    Summary_Specific:
      "This dataset includes mRNA expression data for ICGC Brain cancer : Glioblastoma Multiforme samples along with their clinical data.",
  },
  {
    Dataset: "ICGC",
    Tissue_code: "",
    Tissue_source: "Tissue_source Adenocarcinoma",
    Tissue_standard: "Rectum",
    "Data Type": "mRNA expression",
    In_prod: "TRUE",
    "Data Source":
      "https://xenabrowser.net/datapages/?cohort=ICGC%20(donor%20centric)&removeHub=https%3A%2F%2Fxena.treehouse.gi.ucsc.edu%3A462",
    "Data Link": "https://dcc.icgc.org/",
    "Number of samples": 154,
    "Number of Identifiers": 20501,
    Summary_general: "",
    Summary_Specific:
      "This dataset includes mRNA expression data for ICGC Rectal cancer : Adenocarcinoma samples along with their clinical data.",
  },
  {
    Dataset: "ICGC",
    Tissue_code: "",
    Tissue_source: "Pancreatic cancer : Adenocarcinoma",
    Tissue_standard: "Pancreas",
    "Data Type": "mRNA expression",
    In_prod: "TRUE",
    "Data Source":
      "https://xenabrowser.net/datapages/?cohort=ICGC%20(donor%20centric)&removeHub=https%3A%2F%2Fxena.treehouse.gi.ucsc.edu%3A463",
    "Data Link": "https://dcc.icgc.org/",
    "Number of samples": 142,
    "Number of Identifiers": 20501,
    Summary_general: "",
    Summary_Specific:
      "This dataset includes mRNA expression data for ICGC Pancreatic cancer : Adenocarcinoma samples along with their clinical data.",
  },
  {
    Dataset: "ICGC",
    Tissue_code: "",
    Tissue_source: "Renal cancer : Clear cell carcinoma",
    Tissue_standard: "Kidney",
    "Data Type": "protein expression",
    In_prod: "TRUE",
    "Data Source":
      "https://xenabrowser.net/datapages/?cohort=ICGC%20(donor%20centric)&removeHub=https%3A%2F%2Fxena.treehouse.gi.ucsc.edu%3A464",
    "Data Link": "https://dcc.icgc.org/",
    "Number of samples": 454,
    "Number of Identifiers": 504,
    Summary_general: "",
    Summary_Specific:
      "This dataset includes protein expression expression data for ICGC Renal cancer : Clear cell carcinoma samples along with their clinical data.",
  },
  {
    Dataset: "ICGC",
    Tissue_code: "",
    Tissue_source: "Head and Neck cancer : Thyroid Carcinoma",
    Tissue_standard: "Thyroid",
    "Data Type": "protein expression",
    In_prod: "TRUE",
    "Data Source":
      "https://xenabrowser.net/datapages/?cohort=ICGC%20(donor%20centric)&removeHub=https%3A%2F%2Fxena.treehouse.gi.ucsc.edu%3A465",
    "Data Link": "https://dcc.icgc.org/",
    "Number of samples": 369,
    "Number of Identifiers": 504,
    Summary_general: "",
    Summary_Specific:
      "This dataset includes protein expression expression data for ICGC Head and Neck cancer : Thyroid Carcinoma samples along with their clinical data.",
  },
  {
    Dataset: "ICGC",
    Tissue_code: "",
    Tissue_source: "Gastric cancer : Adenocarcinoma",
    Tissue_standard: "Stomach",
    "Data Type": "protein expression",
    In_prod: "TRUE",
    "Data Source":
      "https://xenabrowser.net/datapages/?cohort=ICGC%20(donor%20centric)&removeHub=https%3A%2F%2Fxena.treehouse.gi.ucsc.edu%3A466",
    "Data Link": "https://dcc.icgc.org/",
    "Number of samples": 357,
    "Number of Identifiers": 504,
    Summary_general: "",
    Summary_Specific:
      "This dataset includes protein expression expression data for ICGC Gastric cancer : Adenocarcinoma samples along with their clinical data.",
  },
  {
    Dataset: "ICGC",
    Tissue_code: "",
    Tissue_source: "Breast cancer : Ductal & lobular",
    Tissue_standard: "Breast",
    "Data Type": "protein expression",
    In_prod: "TRUE",
    "Data Source":
      "https://xenabrowser.net/datapages/?cohort=ICGC%20(donor%20centric)&removeHub=https%3A%2F%2Fxena.treehouse.gi.ucsc.edu%3A467",
    "Data Link": "https://dcc.icgc.org/",
    "Number of samples": 298,
    "Number of Identifiers": 504,
    Summary_general: "",
    Summary_Specific:
      "This dataset includes protein expression expression data for ICGC Breast cancer : Ductal & lobular samples along with their clinical data.",
  },
  {
    Dataset: "ICGC",
    Tissue_code: "",
    Tissue_source: "Colon cancer : Adenocarcinoma",
    Tissue_standard: "Colon",
    "Data Type": "protein expression",
    In_prod: "TRUE",
    "Data Source":
      "https://xenabrowser.net/datapages/?cohort=ICGC%20(donor%20centric)&removeHub=https%3A%2F%2Fxena.treehouse.gi.ucsc.edu%3A468",
    "Data Link": "https://dcc.icgc.org/",
    "Number of samples": 290,
    "Number of Identifiers": 504,
    Summary_general: "",
    Summary_Specific:
      "This dataset includes protein expression expression data for ICGC Colon cancer : Adenocarcinoma samples along with their clinical data.",
  },
  {
    Dataset: "ICGC",
    Tissue_code: "",
    Tissue_source: "Brain cancer : Lower grade glioma",
    Tissue_standard: "Brain and CNS",
    "Data Type": "protein expression",
    In_prod: "TRUE",
    "Data Source":
      "https://xenabrowser.net/datapages/?cohort=ICGC%20(donor%20centric)&removeHub=https%3A%2F%2Fxena.treehouse.gi.ucsc.edu%3A469",
    "Data Link": "https://dcc.icgc.org/",
    "Number of samples": 258,
    "Number of Identifiers": 504,
    Summary_general: "",
    Summary_Specific:
      "This dataset includes protein expression expression data for ICGC Brain cancer : Lower grade glioma samples along with their clinical data.",
  },
  {
    Dataset: "ICGC",
    Tissue_code: "",
    Tissue_source: "Head and Neck cancer : Squamous cell carcinoma",
    Tissue_standard: "Head and neck",
    "Data Type": "protein expression",
    In_prod: "TRUE",
    "Data Source":
      "https://xenabrowser.net/datapages/?cohort=ICGC%20(donor%20centric)&removeHub=https%3A%2F%2Fxena.treehouse.gi.ucsc.edu%3A470",
    "Data Link": "https://dcc.icgc.org/",
    "Number of samples": 212,
    "Number of Identifiers": 504,
    Summary_general: "",
    Summary_Specific:
      "This dataset includes protein expression expression data for ICGC Head and Neck cancer : Squamous cell carcinoma samples along with their clinical data.",
  },
  {
    Dataset: "ICGC",
    Tissue_code: "",
    Tissue_source: "Brain cancer : Glioblastoma Multiforme",
    Tissue_standard: "Brain and CNS",
    "Data Type": "protein expression",
    In_prod: "TRUE",
    "Data Source":
      "https://xenabrowser.net/datapages/?cohort=ICGC%20(donor%20centric)&removeHub=https%3A%2F%2Fxena.treehouse.gi.ucsc.edu%3A471",
    "Data Link": "https://dcc.icgc.org/",
    "Number of samples": 211,
    "Number of Identifiers": 504,
    Summary_general: "",
    Summary_Specific:
      "This dataset includes protein expression expression data for ICGC Brain cancer : Glioblastoma Multiforme samples along with their clinical data.",
  },
  {
    Dataset: "ICGC",
    Tissue_code: "",
    Tissue_source: "Endometrial cancer : Uterine corpus endometrial carcinoma",
    Tissue_standard: "Uterus",
    "Data Type": "protein expression",
    In_prod: "TRUE",
    "Data Source":
      "https://xenabrowser.net/datapages/?cohort=ICGC%20(donor%20centric)&removeHub=https%3A%2F%2Fxena.treehouse.gi.ucsc.edu%3A472",
    "Data Link": "https://dcc.icgc.org/",
    "Number of samples": 200,
    "Number of Identifiers": 504,
    Summary_general: "",
    Summary_Specific:
      "This dataset includes protein expression expression data for ICGC Endometrial cancer : Uterine corpus endometrial carcinoma samples along with their clinical data.",
  },
  {
    Dataset: "ICGC",
    Tissue_code: "",
    Tissue_source: "Lung cancer : Squamous cell carcinoma",
    Tissue_standard: "Lung",
    "Data Type": "protein expression",
    In_prod: "TRUE",
    "Data Source":
      "https://xenabrowser.net/datapages/?cohort=ICGC%20(donor%20centric)&removeHub=https%3A%2F%2Fxena.treehouse.gi.ucsc.edu%3A473",
    "Data Link": "https://dcc.icgc.org/",
    "Number of samples": 195,
    "Number of Identifiers": 504,
    Summary_general: "",
    Summary_Specific:
      "This dataset includes protein expression expression data for ICGC Lung cancer : Squamous cell carcinoma samples along with their clinical data.",
  },
  {
    Dataset: "ICGC",
    Tissue_code: "",
    Tissue_source: "Prostate cancer : Adenocarcinoma",
    Tissue_standard: "Prostate",
    "Data Type": "protein expression",
    In_prod: "TRUE",
    "Data Source":
      "https://xenabrowser.net/datapages/?cohort=ICGC%20(donor%20centric)&removeHub=https%3A%2F%2Fxena.treehouse.gi.ucsc.edu%3A474",
    "Data Link": "https://dcc.icgc.org/",
    "Number of samples": 159,
    "Number of Identifiers": 504,
    Summary_general: "",
    Summary_Specific:
      "This dataset includes protein expression expression data for ICGC Prostate cancer : Adenocarcinoma samples along with their clinical data.",
  },
  {
    Dataset: "ICGC",
    Tissue_code: "",
    Tissue_source: "Bladder cancer : Invasive Urothelial Bladder cancer",
    Tissue_standard: "Bladder",
    "Data Type": "protein expression",
    In_prod: "TRUE",
    "Data Source":
      "https://xenabrowser.net/datapages/?cohort=ICGC%20(donor%20centric)&removeHub=https%3A%2F%2Fxena.treehouse.gi.ucsc.edu%3A475",
    "Data Link": "https://dcc.icgc.org/",
    "Number of samples": 127,
    "Number of Identifiers": 504,
    Summary_general: "",
    Summary_Specific:
      "This dataset includes protein expression expression data for ICGC Bladder cancer : Invasive Urothelial Bladder cancer samples along with their clinical data.",
  },
  {
    Dataset: "ICGC",
    Tissue_code: "",
    Tissue_source: "Rectal cancer : Adenocarcinoma",
    Tissue_standard: "Rectum",
    "Data Type": "protein expression",
    In_prod: "TRUE",
    "Data Source":
      "https://xenabrowser.net/datapages/?cohort=ICGC%20(donor%20centric)&removeHub=https%3A%2F%2Fxena.treehouse.gi.ucsc.edu%3A476",
    "Data Link": "https://dcc.icgc.org/",
    "Number of samples": 111,
    "Number of Identifiers": 504,
    Summary_general: "",
    Summary_Specific:
      "This dataset includes protein expression expression data for ICGC Rectal cancer : Adenocarcinoma samples along with their clinical data.",
  },
  {
    Dataset: "PCAWG",
    Tissue_code: "",
    Tissue_source: "Liver-HCC",
    Tissue_standard: "Liver",
    "Data Type": "mRNA expression",
    In_prod: "TRUE",
    "Data Source":
      "https://xenabrowser.net/datapages/?cohort=PCAWG%20(donor%20centric)&removeHub=https%3A%2F%2Fxena.treehouse.gi.ucsc.edu%3A443",
    "Data Link": "https://dcc.icgc.org/pcawg",
    "Number of samples": 100,
    "Number of Identifiers": 57820,
    Summary_general:
      "The Pan-Cancer Analysis of Whole Genomes (PCAWG)  is an international collaborative study to understand the mutational patterns in the whole genomes of more than 2,600 cancer from the International Cancer Genome Consortium (ICGC).",
    Summary_Specific:
      "This dataset includes mRNA expression data for PCAWG Liver-HCC samples along with their clinical data.",
  },
  {
    Dataset: "PCAWG",
    Tissue_code: "",
    Tissue_source: "Kidney-RCC",
    Tissue_standard: "Kidney",
    "Data Type": "mRNA expression",
    In_prod: "TRUE",
    "Data Source":
      "https://xenabrowser.net/datapages/?cohort=PCAWG%20(donor%20centric)&removeHub=https%3A%2F%2Fxena.treehouse.gi.ucsc.edu%3A444",
    "Data Link": "https://dcc.icgc.org/pcawg",
    "Number of samples": 136,
    "Number of Identifiers": 57820,
    Summary_general: "",
    Summary_Specific:
      "This dataset includes mRNA expression data for PCAWG Kidney-RCC samples along with their clinical data.",
  },
  {
    Dataset: "PCAWG",
    Tissue_code: "",
    Tissue_source: "Lymph-BNHL",
    Tissue_standard: "Blood and Lymph",
    "Data Type": "mRNA expression",
    In_prod: "TRUE",
    "Data Source":
      "https://xenabrowser.net/datapages/?cohort=PCAWG%20(donor%20centric)&removeHub=https%3A%2F%2Fxena.treehouse.gi.ucsc.edu%3A445",
    "Data Link": "https://dcc.icgc.org/pcawg",
    "Number of samples": 106,
    "Number of Identifiers": 57820,
    Summary_general: "",
    Summary_Specific:
      "This dataset includes mRNA expression data for PCAWG Lymph-BNHL samples along with their clinical data.",
  },
  {
    Dataset: "METABRIC",
    Tissue_code: "",
    Tissue_source: "Breast cancer",
    Tissue_standard: "Breast",
    "Data Type": "mRNA expression",
    In_prod: "TRUE",
    "Data Source": "https://www.cbioportal.org/study/summary?id=brca_metabric",
    "Data Link": "https://www.mercuriolab.umassmed.edu/metabric",
    "Number of samples": 1980,
    "Number of Identifiers": 20603,
    Summary_general:
      "The Molecular Taxonomy of Breast Cancer International Consortium (MTABRIC) study identifies the genomic markup of different breast cancer subtypes.",
    Summary_Specific:
      "This dataset includes mRNA expression data for METABRIC samples along with their clinical data.",
  },
  {
    Dataset: "METABRIC",
    Tissue_code: "",
    Tissue_source: "Breast Cancer",
    Tissue_standard: "Breast",
    "Data Type": "copy number variants",
    In_prod: "TRUE",
    "Data Source": "https://www.cbioportal.org/study/summary?id=brca_metabric",
    "Data Link": "https://www.mercuriolab.umassmed.edu/metabric",
    "Number of samples": 2173,
    "Number of Identifiers": 22544,
    Summary_general: "",
    Summary_Specific:
      "This dataset includes copy number variants data for METABRIC samples along with their clinical data.",
  },
];

export const fakeDataset = {
  Dataset: "TCGA – Glioblastoma Multiforme",
  Tissue_code: "GBM",
  Tissue_source: "Glioblastoma Multiforme",
  Tissue_standard: "Brain and CNS",
  "Data Type": "mRNA expression",
  In_prod: "TRUE",
  "Data Source":
    "https://xenabrowser.net/datapages/?cohort=TCGA%20Pan-Cancer%20(PANCAN)&removeHub=https%3A%2F%2Fxena.treehouse.gi.ucsc.edu%3A443",
  "Data Link":
    "https://www.cancer.gov/about-nci/organization/ccg/research/structural-genomics/tcga",
  "Number of samples": 165,
  "Number of Identifiers": "58,581",
  Summary_general:
    "The TCGA pan-cancer atlas provides an analysis of 33 common cancer types (over 11000 tumors in humans). It shows a comprehensive view of cancers and how they have arisen with the help of OMIC data. It provides a good insight into the development of targeted treatments for cancer.",
  Summary_Specific:
    "This dataset includes mRNA expression data for TCGA Glioblastoma Multiforme samples along with their clinical data.",
  preview: {
    data: "/content/drive/MyDrive/Bionl_MVP/Preview_Test/data(LGG_TCGA_[expression_data]).csv",
    clinical:
      "/content/drive/MyDrive/Bionl_MVP/Preview_Test/clinical(LGG_TCGA_[expression_data]).csv",
    highly_expressed: {
      genes: [
        "MT-ATP8",
        "MT-CO1",
        "MT-CO2",
        "MT-ATP6",
        "MT-CO3",
        "MT-ND4",
        "MT-ND3",
        "MT-RNR2",
        "CLU",
        "MT-ND4L",
      ],
      plot: "/content/drive/MyDrive/Bionl_MVP/Preview_Test/high_expression_box_(LGG_TCGA_[expression_data]).png",
    },
    lowly_expressed: {
      genes: [
        "Metazoa_SRP",
        "SCARNA15",
        "GHRLOS",
        "SPRY3",
        "CD99P1",
        "IL3RA",
        "ASMTL-AS1",
        "AC008079.10",
        "PLCXD1",
        "RP11-305L7.7",
      ],
      plot: "/content/drive/MyDrive/Bionl_MVP/Preview_Test/low_expression_box_(LGG_TCGA_[expression_data]).png",
    },
    heatmap:
      "/content/drive/MyDrive/Bionl_MVP/Preview_Test/heatmap_(LGG_TCGA_[expression_data]).png",
    categorical_table:
      "/content/drive/MyDrive/Bionl_MVP/Preview_Test/categorical_table1(LGG_TCGA_[expression_data]).json",
    categorical_table_json: {
      Variable: {
        "0": "gender",
        "1": "",
        "2": "race",
        "3": "",
        "4": "",
        "5": "",
        "6": "",
        "7": "",
        "8": "sample_type",
        "9": "",
      },
      "Frequency (n=x)": {
        "0": 233,
        "1": 289,
        "2": 481,
        "3": 22,
        "4": 5,
        "5": 3,
        "6": 8,
        "7": 1,
        "8": 508,
        "9": 14,
      },
      "Percentage %": {
        "0": 44.64,
        "1": 55.36,
        "2": 92.15,
        "3": 4.21,
        "4": 0.96,
        "5": 0.57,
        "6": 1.53,
        "7": 0.19,
        "8": 97.32,
        "9": 2.68,
      },
    },

    numerical_table:
      "/content/drive/MyDrive/Bionl_MVP/Preview_Test/numerical_table2(LGG_TCGA_[expression_data]).json",
  },
};
