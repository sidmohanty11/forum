
          /\      |‾‾| /‾‾/   /‾‾/   
     /\  /  \     |  |/  /   /  /    
    /  \/    \    |     (   /   ‾‾\  
   /          \   |  |\  \ |  (‾)  | 
  / __________ \  |__| \__\ \_____/ .io

  execution: local
     script: get_a_post.js
     output: -

  scenarios: (100.00%) 1 scenario, 100 max VUs, 10m30s max duration (incl. graceful stop):
           * default: 1000 iterations shared among 100 VUs (maxDuration: 10m0s, gracefulStop: 30s)


running (00m01.0s), 100/100 VUs, 200 complete and 0 interrupted iterations
default   [  20% ] 100 VUs  00m01.0s/10m0s  0200/1000 shared iters

running (00m02.0s), 100/100 VUs, 400 complete and 0 interrupted iterations
default   [  40% ] 100 VUs  00m02.0s/10m0s  0400/1000 shared iters

running (00m03.0s), 100/100 VUs, 700 complete and 0 interrupted iterations
default   [  70% ] 100 VUs  00m03.0s/10m0s  0700/1000 shared iters

running (00m04.0s), 085/100 VUs, 915 complete and 0 interrupted iterations
default   [  92% ] 100 VUs  00m04.0s/10m0s  0915/1000 shared iters

running (00m04.1s), 000/100 VUs, 1000 complete and 0 interrupted iterations
default ✓ [ 100% ] 100 VUs  00m04.1s/10m0s  1000/1000 shared iters

     data_received..................: 874 kB 214 kB/s
     data_sent......................: 422 kB 103 kB/s
     http_req_blocked...............: min=0.00ms   avg=1.21ms   med=0.00ms   p(99)=19.28ms  p(99.9)=21.29ms  max=23.47ms  count=1000
     http_req_connecting............: min=0.00ms   avg=0.68ms   med=0.00ms   p(99)=10.02ms  p(99.9)=11.03ms  max=16.05ms  count=1000
     http_req_duration..............: min=319.69ms avg=399.86ms med=393.36ms p(99)=497.49ms p(99.9)=536.98ms max=537.60ms count=1000
       { expected_response:true }...: min=319.69ms avg=399.86ms med=393.36ms p(99)=497.49ms p(99.9)=536.98ms max=537.60ms count=1000
     http_req_failed................: 0.00%  ✓ 0          ✗ 1000 
     http_req_receiving.............: min=0.00ms   avg=0.07ms   med=0.00ms   p(99)=1.00ms   p(99.9)=1.10ms   max=1.10ms   count=1000
     http_req_sending...............: min=0.00ms   avg=0.27ms   med=0.00ms   p(99)=4.99ms   p(99.9)=5.01ms   max=8.00ms   count=1000
     http_req_tls_handshaking.......: min=0.00ms   avg=0.00ms   med=0.00ms   p(99)=0.00ms   p(99.9)=0.00ms   max=0.00ms   count=1000
     http_req_waiting...............: min=319.69ms avg=399.52ms med=392.34ms p(99)=497.49ms p(99.9)=536.92ms max=537.01ms count=1000
     http_reqs......................: 1000   245.096261/s
     iteration_duration.............: min=320.27ms avg=401.61ms med=396.23ms p(99)=497.77ms p(99.9)=558.79ms max=560.54ms count=1000
     iterations.....................: 1000   245.096261/s
     vus............................: 85     min=85       max=100
     vus_max........................: 100    min=100      max=100

