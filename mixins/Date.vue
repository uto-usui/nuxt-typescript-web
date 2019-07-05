<script>
import dayjs from 'dayjs'

export default {
  methods: {
    getDate: date => dayjs(date).format('YYYY.MM.DD ddd'),
  },
}
</script>
