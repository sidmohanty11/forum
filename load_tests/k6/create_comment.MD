
          /\      |‾‾| /‾‾/   /‾‾/   
     /\  /  \     |  |/  /   /  /    
    /  \/    \    |     (   /   ‾‾\  
   /          \   |  |\  \ |  (‾)  | 
  / __________ \  |__| \__\ \_____/ .io

  execution: local
     script: create_comment.js
     output: -

  scenarios: (100.00%) 1 scenario, 1 max VUs, 10m30s max duration (incl. graceful stop):
           * default: 1 iterations for each of 1 VUs (maxDuration: 10m0s, gracefulStop: 30s)


running (00m00.0s), 0/1 VUs, 1 complete and 0 interrupted iterations
default ✓ [ 100% ] 1 VUs  00m00.0s/10m0s  1/1 iters, 1 per VU

     data_received..................: 358 B 12 kB/s
     data_sent......................: 514 B 17 kB/s
     http_req_blocked...............: min=7.00ms  avg=7.00ms  med=7.00ms  p(99)=7.00ms  p(99.9)=7.00ms  max=7.00ms  count=1
     http_req_connecting............: min=1.00ms  avg=1.00ms  med=1.00ms  p(99)=1.00ms  p(99.9)=1.00ms  max=1.00ms  count=1
     http_req_duration..............: min=21.15ms avg=21.15ms med=21.15ms p(99)=21.15ms p(99.9)=21.15ms max=21.15ms count=1
       { expected_response:true }...: min=21.15ms avg=21.15ms med=21.15ms p(99)=21.15ms p(99.9)=21.15ms max=21.15ms count=1
     http_req_failed................: 0.00% ✓ 0         ✗ 1
     http_req_receiving.............: min=0.00ms  avg=0.00ms  med=0.00ms  p(99)=0.00ms  p(99.9)=0.00ms  max=0.00ms  count=1
     http_req_sending...............: min=0.00ms  avg=0.00ms  med=0.00ms  p(99)=0.00ms  p(99.9)=0.00ms  max=0.00ms  count=1
     http_req_tls_handshaking.......: min=0.00ms  avg=0.00ms  med=0.00ms  p(99)=0.00ms  p(99.9)=0.00ms  max=0.00ms  count=1
     http_req_waiting...............: min=21.15ms avg=21.15ms med=21.15ms p(99)=21.15ms p(99.9)=21.15ms max=21.15ms count=1
     http_reqs......................: 1     32.917693/s
     iteration_duration.............: min=28.76ms avg=28.76ms med=28.76ms p(99)=28.76ms p(99.9)=28.76ms max=28.76ms count=1
     iterations.....................: 1     32.917693/s

