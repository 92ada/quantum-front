import Mock from 'mockjs'

const PurchasingList = []
const StockList = []

const count = 100

/**
 * Purchasing
 * */
for (let i = 0; i < count; i++) {
  PurchasingList.push(Mock.mock({
    'purchasing_id': '@increment',
    'title': '@title',
    'budget|1000-100000': 1,
    'is_imported|1': true,
    'purchasing_method': '@word',
    'argument_method': '@word',
    'request_date': '@date',
    'handler': '@first @last',
    'pi': '@first @last',
    'is_finished|1': true,
    'status': '@word',
    'supplier_reply_delivery_time': '@date',
    'bid_winning_supplier': '@word',
    'contract_amount|10000-1000000': 1,
    'paid_amount|10000-1000000': 1,
    'contract_date': '@date',
    'placement_site': '@word',
    'funding_source': '@word',
    'contract_no': '@guid',
    'payment_details': '@word',
    'manufacturer': '@title',
    'supplier_contact_person': '@first @last',
    'supplier_contact_phone|15602900000-18900000000': 1,
    'supplier_contact_email': '@email',
    'remark': '@sentence'
  }))
}

/**
 * Stock
 * */
for (let i = 0; i < count; i++) {
  StockList.push(Mock.mock({
    'stock_id': '@increment',
    'type': '@word',
    'no': '@guid',
    'title': '@title',
    'model': '@word',
    'value|10000-100000': 1,
    'net_value|10000-100000': 1,
    'taker_institution': '@word',
    'taker': '@first @last',
    'placement_site': '@word',
    'factory_no': '@guid',
    'status': '@word',
    'used_years|1-5': 1,
    'min_usage_years|1-5': 1,
    'inbound_date': '@date',
    'admin': '@first @last',
    'document_no': '@guid',
    'remark': '@sentence'
  }))
}

export {
  PurchasingList,
  StockList
}
